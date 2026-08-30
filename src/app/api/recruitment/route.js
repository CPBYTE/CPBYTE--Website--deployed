import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Recruitment from '@/models/Recruitment';

const rateLimitMap = new Map();

function checkRateLimit(ip) {
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 3; // Limit each IP to 3 requests per 15 mins

  const now = Date.now();
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  const record = rateLimitMap.get(ip);
  if (now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count += 1;
  return true;
}

export async function POST(request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.ip || '127.0.0.1';
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { message: 'Too many requests from this IP, please try again after 15 minutes.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    await connectToDatabase();

    const {
      name,
      branch,
      section,
      collegeEmail,
      phone,
      dsaLanguage,
      firstDomain,
      secondDomain,
      year,
      referredBy,
    } = body;

    // Basic Validation
    if (
      !name ||
      !branch ||
      !section ||
      !collegeEmail ||
      !phone ||
      !dsaLanguage ||
      !firstDomain ||
      !secondDomain ||
      !year
    ) {
      return NextResponse.json(
        { message: 'Please fill out all required fields.' },
        { status: 400 }
      );
    }

    // Check if a user with the same email already exists
    const existingApplication = await Recruitment.findOne({ collegeEmail });

    if (existingApplication) {
      return NextResponse.json(
        { message: 'A form with this college email already submitted.' },
        { status: 409 }
      );
    }

    const newRecruitment = new Recruitment({
      name,
      branch,
      section,
      collegeEmail,
      phone,
      dsaLanguage,
      firstDomain,
      secondDomain,
      year,
      referredBy,
    });

    await newRecruitment.save();

    return NextResponse.json(
      { message: 'Form submitted successfully!', data: newRecruitment },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting recruitment form:', error);
    
    // Check for Mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message);
      return NextResponse.json({ message: messages.join(', ') }, { status: 400 });
    }

    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
