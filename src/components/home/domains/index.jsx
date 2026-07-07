import React from 'react'

const Domains = () => {
    const domains = [
        { id: 0, name: 'DSA & CP', icon: '🧮' },
        { id: 1, name: 'UI/UX', icon: '🎨' },
        { id: 2, name: 'Web Development', icon: '🌐' },
        { id: 3, name: 'Android Development', icon: '📱' },
        { id: 4, name: 'AR / VR', icon: '🥽' },
        { id: 5, name: 'AI/ML', icon: '🤖' },
        { id: 6, name: 'Graphic Designing', icon: '✏️' },
        { id: 7, name: 'Content Writing', icon: '📝' },
        { id: 8, name: 'Personality Development', icon: '💡' },
    ];

    return (
        <section className="max-w-screen-xl mt-2 md:mt-10 mx-auto px-4">
            <h1 className="text-2xl text-center font-bold text-white mx-auto lg:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Our Domains
                <div className="flex justify-center mx-auto mt-6">
                    <span className="inline-block w-44 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></span>
                    <span className="inline-block w-6 h-1 mx-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-2 h-1 bg-blue-400 rounded-full"></span>
                </div>
            </h1>

            <div className="grid grid-cols-1 gap-6 mt-8 xl:mt-12 md:grid-cols-2 xl:grid-cols-3">
                {domains.map((domain) => (
                    <div
                        key={domain.id}
                        className="glass-card flex flex-col items-center p-8 group cursor-pointer"
                    >
                        <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-2xl bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-500/40 group-hover:bg-blue-500/15 transition-all duration-300">
                            <span className="text-4xl">{domain.icon}</span>
                        </div>

                        <h2 className="text-xl font-semibold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                            {domain.name}
                        </h2>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Domains;
