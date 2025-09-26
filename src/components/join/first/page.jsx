// "use client"

// import { CircularProgress, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
// import { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import Input from '@/components/input';
// import InputRadio from '@/components/inputRadio';
// import InputSelect from '@/components/inputSelect';
// import { useRouter } from "next/navigation";

// import Lightning from "@/components/Lightning";

// const RegisterPage = ({}) => {
//   const router = useRouter();
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();
//   const [submitStatus, setSubmitStatus] = useState('idle'); 
//   const [errorMsg, setErrorMsg] = useState('');

//   const validationSchema = Yup.object({
//     name: Yup.string().max(25, 'Must be 25 characters or less').required('Required'),
//     email: Yup.string().email('Invalid email address').required('Required'),
//     id: Yup.string().max(19, 'Must be 19 characters or less').required('Required'),
//     whatsappNumber: Yup.string().matches(/^[0-9]{10}$/, '10 digit mobile number should be entered').required('Required'),
//     gender: Yup.string().required('Required'),
//     branch: Yup.string().required('Required'),
//     residence: Yup.string().required('Required'),
//     domain1: Yup.string().required('Required'),
//     domain2: Yup.string().required('Required'),
//   });

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       whatsappNumber: '',
//       id: '',
//       email: '',
//       gender: '',
//       branch: '',
//       residence: '',
//       domain1: '',
//       domain2: '',
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       onOpen();
//       setSubmitStatus('submitting');
//       setErrorMsg('');

//       try {
//         const response = await fetch('https://cpbyte-backend.onrender.com/api/register', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(values),
//         });
//         const result = await response.json();

//         if (response.ok) {
//           setSubmitStatus('success');
//           setTimeout(() => router.push('/submitted'), 1000);
//         } else if (response.status === 409) {
//           setSubmitStatus('error');
//           setErrorMsg(result.message || 'Duplicate entry detected!');
//         } else {
//           setSubmitStatus('error');
//           setErrorMsg(result.error || 'Something went wrong.');
//         }
//       } catch (error) {
//         console.error('Submission failed:', error);
//         setSubmitStatus('error');
//         setErrorMsg('Failed to submit form.');
//       }
//     }
//   });

//   const genderOptions = [
//     { label: 'Male', value: 'male' },
//     { label: 'Female', value: 'female' }
//   ];
//   const residenceOptions = [
//     { label: 'Day Scholar', value: 'dayscholar' },
//     { label: 'Hosteller', value: 'hosteller' }
//   ];
//   const branchOptions = [
//     { label: 'Select Option', value: 'none' },
//     { label: 'CSE', value: 'cse' },
//     { label: 'CS', value: 'cs' },
//     { label: 'IT', value: 'it' },
//     { label: 'CSIT', value: 'csit' },
//     { label: 'CSAI', value: 'csai' },
//     { label: 'CSE (AI/ML)', value: 'cseaiml' },
//     { label: 'ECE', value: 'ece' },
//     { label: 'ME', value: 'me' },
//     { label: 'EEE', value: 'eee' },
//     { label: 'MCA', value: 'mca' },
//   ];
//   const domainOptions = [
//     { label: 'AI / ML', value: 'aiml' },
//     { label: 'Android Development', value: 'android' },
//     { label: 'AR / VR', value: 'arvr' },
//     { label: 'Graphic Designing', value: 'graphics' },
//     { label: 'UI / UX', value: 'uiux' },
//     { label: 'Web Development', value: 'webdev' }
//   ];

//   return (
//     <>
//       <title>Register to become Member of CPBYTE KIET | Technical Club Of KIET</title>

//       {/* Centered Wrapper */}
//       <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 bg-black">
        
//         {/* Heading in the middle */}
//         <h2 className="mb-8 text-3xl sm:text-4xl font-bold text-white text-center drop-shadow-lg">
//           <span className="text-blue-400">CPBYTE</span> RECRUITMENT'25
//         </h2>

//         {/* Box with Lightning background */}
//         <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
//           {/* Lightning background inside box */}
//           <div className="absolute inset-0 z-0">
//             <Lightning hue={220} xOffset={0} speed={1} intensity={1} size={1} />
//           </div>

//           {/* Form content overlay */}
//           <div className="relative z-10 bg-black/60 p-8 md:p-12 text-white">
//             <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {/* Left Side */}
//               <div className="flex flex-col gap-6 text-white">
//                 <Input value="name" label="Enter your Name" placeHolder="Aditya Tyagi"
//                   formikTouched={formik.touched.name} formikError={formik.errors.name} 
//                   formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.name} type="text"
//                 />
//                 <Input value="email" label="Your Email" placeHolder="example@gmail.com"
//                   formikTouched={formik.touched.email} formikError={formik.errors.email}
//                   formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.email} type="email"
//                 />
//                 <Input value="id" label="Enter your Library ID" placeHolder="2125cs1001"
//                   formikTouched={formik.touched.id} formikError={formik.errors.id}
//                   formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.id} type="text"
//                 />
//                 <Input value="whatsappNumber" label="Whatsapp Number" placeHolder="8088088088"
//                   formikTouched={formik.touched.whatsappNumber} formikError={formik.errors.whatsappNumber}
//                   formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.whatsappNumber} type="tel"
//                 />
//               </div>

//               {/* Right Side */}
//               <div className="flex flex-col gap-6">
//                 <InputRadio value="gender" label="Gender" options={genderOptions}
//                   formikTouched={formik.touched.gender} formikError={formik.errors.gender}
//                   formikChange={formik.handleChange} formikBlur={formik.handleBlur}
//                 />
//                 <InputSelect value="branch" label="Select your Branch" options={branchOptions}
//                   formikTouched={formik.touched.branch} formikError={formik.errors.branch}
//                   formikChange={formik.handleChange} formikBlur={formik.handleBlur}
//                 />
//                 <InputRadio value="residence" label="Day Scholar or Hosteller" options={residenceOptions}
//                   formikTouched={formik.touched.residence} formikError={formik.errors.residence}
//                   formikChange={formik.handleChange} formikBlur={formik.handleBlur}
//                 />
//                 <InputSelect value="domain1" label="Interested Domain Choice 1" options={domainOptions}
//                   formikTouched={formik.touched.domain1} formikError={formik.errors.domain1}
//                   formikChange={formik.handleChange} formikBlur={formik.handleBlur}
//                 />
//                 <InputSelect value="domain2" label="Interested Domain Choice 2" options={domainOptions}
//                   formikTouched={formik.touched.domain2} formikError={formik.errors.domain2}
//                   formikChange={formik.handleChange} formikBlur={formik.handleBlur}
//                 />
//               </div>

//               {/* Submit Button */}
//               <div className="col-span-1 md:col-span-2 flex justify-center">
//                 <Button color="primary" type="submit" className="mt-6 w-1/3" disabled={submitStatus === 'submitting'}>
//                   {submitStatus === 'submitting' ? 'Submitting...' : 'Register'}
//                 </Button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={submitStatus !== 'submitting'}>
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader>Form Submission Status</ModalHeader>
//               <ModalBody className="flex flex-col items-center gap-2">
//                 {submitStatus === 'submitting' && <CircularProgress size="lg" aria-label="Loading..." label="Submitting Form" />}
//                 {submitStatus === 'success' && <CircularProgress label="Successfully Submitted" size="lg" value={100} color="success" showValueLabel={true} />}
//                 {submitStatus === 'error' && <p className="text-red-600">{errorMsg}</p>}
//               </ModalBody>
//               <ModalFooter>
//                 {submitStatus === 'error' && <Button onPress={onClose}>Close</Button>}
//               </ModalFooter>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

// export default RegisterPage;


"use client"

import { CircularProgress, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '@/components/input';
import InputRadio from '@/components/inputRadio';
import InputSelect from '@/components/inputSelect';
import { useRouter } from "next/navigation";
import Particles from "../../Particles";

const RegisterPage = () => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [submitStatus, setSubmitStatus] = useState('idle'); 
  const [errorMsg, setErrorMsg] = useState('');

  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .matches(/@.*\.edu$/, 'College email required')
      .required('Required'),
    id: Yup.string().max(19, 'Must be 19 characters or less'), // optional
    whatsappNumber: Yup.string()
      .matches(/^[0-9]{10}$/, '10 digit mobile number required')
      .required('Required'),
    gender: Yup.string().required('Required'),
    branch: Yup.string().required('Required'),
    residence: Yup.string().required('Required'),
    domain1: Yup.string().required('Required'),
    domain2: Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      whatsappNumber: '',
      id: 'NAN',
      email: '',
      gender: '',
      branch: '',
      residence: '',
      domain1: '',
      domain2: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      onOpen();
      setSubmitStatus('submitting');
      setErrorMsg('');

      try {
        const response = await fetch('https://cpbyte-backend.onrender.com/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
        const result = await response.json();

        if (response.ok) {
          setSubmitStatus('success');
          setTimeout(() => router.push('/submitted'), 1000);
        } else if (response.status === 409) {
          setSubmitStatus('error');
          setErrorMsg(result.message || 'Duplicate entry detected!');
        } else {
          setSubmitStatus('error');
          setErrorMsg(result.error || 'Something went wrong.');
        }
      } catch (error) {
        console.error('Submission failed:', error);
        setSubmitStatus('error');
        setErrorMsg('Failed to submit form.');
      }
    }
  });

  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ];
  const residenceOptions = [
    { label: 'Day Scholar', value: 'dayscholar' },
    { label: 'Hosteller', value: 'hosteller' }
  ];
  const branchOptions = [
    { label: 'Select Option', value: 'none' },
    { label: 'CSE', value: 'cse' },
    { label: 'CS', value: 'cs' },
    { label: 'IT', value: 'it' },
    { label: 'CSIT', value: 'csit' },
    { label: 'CSAI', value: 'csai' },
    { label: 'CSE (AI/ML)', value: 'cseaiml' },
    { label: 'ECE', value: 'ece' },
    { label: 'ME', value: 'me' },
    { label: 'EEE', value: 'eee' },
    { label: 'CSE(CS)', value: 'csecs' },
    { label: 'ELCE', value: 'elce' },
    {label: 'CSE(DS)', value: 'cseds'},
    {label: 'VLSI', value: 'vlsi'}
  ];
  const domainOptions = [
    { label: 'AI / ML', value: 'aiml' },
    { label: 'Android Development', value: 'android' },
    { label: 'AR / VR', value: 'arvr' },
    { label: 'Graphic Designing', value: 'graphics' },
    { label: 'UI / UX', value: 'uiux' },
    { label: 'Web Development', value: 'webdev' },
    { label: 'Creative Domain', value: 'creative' }, // new domain
    { label: 'GenAI', value: 'genai' }, // new domain
  ];

  return (
    <>
      <title>Register to become Member of CPBYTE KIET | Technical Club Of KIET</title>

      <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 bg-black">
        {/* Particles background */}
        <div className="absolute inset-0 z-0">
          <div style={{ width: '100%', height: '100%', position: 'relative' }} className="bg-black">
            <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={800}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
        </div>

        {/* Heading */}
        <h2 className="mb-8 text-3xl sm:text-4xl font-bold text-white text-center drop-shadow-lg">
          <span className="text-blue-400">CPBYTE</span> RECRUITMENT'25
        </h2>

        {/* Form Box */}
        <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
          <div className="relative z-10 bg-black/60 p-8 md:p-12 text-white">
            <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left */}
              <div className="flex flex-col gap-6 text-white">
                <Input
                  value="name"
                  label="Enter your Full Name"
                  placeHolder="Aditya Tyagi"
                  formikTouched={formik.touched.name}
                  formikError={formik.errors.name}
                  formikChange={formik.handleChange}
                  formikBlur={formik.handleBlur}
                  formikValue={formik.values.name}
                  type="text"
                />
                <Input
                  value="email"
                  label="College Email"
                  placeHolder="example@kiet.edu"
                  formikTouched={formik.touched.email}
                  formikError={formik.errors.email}
                  formikChange={formik.handleChange}
                  formikBlur={formik.handleBlur}
                  formikValue={formik.values.email}
                  type="email"
                />
                <Input
                  value="id"
                  label="Library ID (write NAN if doesnt have libID)"
                  placeHolder="2125cs1001"
                  formikTouched={formik.touched.id}
                  formikError={formik.errors.id}
                  formikChange={formik.handleChange}
                  formikBlur={formik.handleBlur}
                  formikValue={formik.values.id}
                  type="text"
                />
                <Input
                  value="whatsappNumber"
                  label="Whatsapp Number"
                  placeHolder="8088088088"
                  formikTouched={formik.touched.whatsappNumber}
                  formikError={formik.errors.whatsappNumber}
                  formikChange={formik.handleChange}
                  formikBlur={formik.handleBlur}
                  formikValue={formik.values.whatsappNumber}
                  type="tel"
                />
              </div>

              {/* Right */}
              <div className="flex flex-col gap-6">
                <InputRadio
                  value="gender"
                  label="Gender"
                  options={genderOptions}
                  formikTouched={formik.touched.gender}
                  formikError={formik.errors.gender}
                  formikChange={formik.handleChange}
                  formikBlur={formik.handleBlur}
                />
                <InputSelect
                  value="branch"
                  label="Select your Branch"
                  options={branchOptions}
                  formikTouched={formik.touched.branch}
                  formikError={formik.errors.branch}
                  formikChange={formik.handleChange}
                  formikBlur={formik.handleBlur}
                />
                <InputRadio
                  value="residence"
                  label="Day Scholar or Hosteller"
                  options={residenceOptions}
                  formikTouched={formik.touched.residence}
                  formikError={formik.errors.residence}
                  formikChange={formik.handleChange}
                  formikBlur={formik.handleBlur}
                />
                <InputSelect
                  value="domain1"
                  label="Interested Domain Choice 1"
                  options={domainOptions}
                  formikTouched={formik.touched.domain1}
                  formikError={formik.errors.domain1}
                  formikChange={formik.handleChange}
                  formikBlur={formik.handleBlur}
                />
                <InputSelect
                  value="domain2"
                  label="Interested Domain Choice 2"
                  options={domainOptions}
                  formikTouched={formik.touched.domain2}
                  formikError={formik.errors.domain2}
                  formikChange={formik.handleChange}
                  formikBlur={formik.handleBlur}
                />
              </div>

              {/* Submit */}
              <div className="col-span-1 md:col-span-2 flex justify-center">
                <Button
                  color="primary"
                  type="submit"
                  className="mt-6 w-1/3 bg-blue-700"
                  disabled={submitStatus === 'submitting'}
                >
                  {submitStatus === 'submitting' ? 'Submitting...' : 'Register'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={submitStatus !== 'submitting'}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Form Submission Status</ModalHeader>
              <ModalBody className="flex flex-col items-center gap-2">
                {submitStatus === 'submitting' && <CircularProgress size="lg" aria-label="Loading..." label="Submitting Form" />}
                {submitStatus === 'success' && <CircularProgress label="Successfully Submitted" size="lg" value={100} color="success" showValueLabel={true} />}
                {submitStatus === 'error' && <p className="text-red-600">{errorMsg}</p>}
              </ModalBody>
              <ModalFooter>
                {submitStatus === 'error' && <Button onPress={onClose}>Close</Button>}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterPage;
