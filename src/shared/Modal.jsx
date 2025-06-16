import React from 'react';
const Modal = () => {
    return (
        <div>
            {/* modal course */}
            <dialog id="course_modal" className="modal">
                <div className="modal-box bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
                    {/* main body */}
                    <div className="mt-8 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg">
                        <h3 className="text-lg font-bold mb-2 text-blue-600 dark:text-blue-400">Empower Your Future with Course Management</h3>
                        <p>
                            Whether you're a student trying to level up your skills or an instructor looking to share knowledge,
                            our <strong>Course Management System</strong> brings everything you need in one place.
                            Browse trending courses, manage your learning journey, and track your progress — all from an easy-to-use platform.
                        </p>
                        <p className="mt-2">
                            Join our growing community and unlock access to <span className="font-semibold">industry-relevant content</span>,
                            real-time course updates, and a supportive learning environment.
                        </p>

                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn bg-base-300 dark:bg-gray-700 dark:text-gray-200 border-none">
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
            {/* modal about */}
            <dialog id="about_modal" className="modal">
                <div className="modal-box bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                    <section className="max-w-5xl mx-auto px-6 py-16">
                        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900 dark:text-gray-100">
                            About Course Management
                        </h1>

                        <div className="space-y-8 text-gray-800 dark:text-gray-300 leading-relaxed text-lg">
                            {/* Mission */}
                            <div>
                                <h2 className="text-2xl font-bold mb-3 text-indigo-700 dark:text-indigo-400">Our Mission</h2>
                                <p>
                                    Our mission is to make learning and teaching more organized, accessible, and efficient.
                                    We aim to provide a platform where educators can easily manage their courses, and learners
                                    can explore, enroll, and track their educational journey with ease.
                                </p>
                            </div>

                            {/* Vision */}
                            <div>
                                <h2 className="text-2xl font-bold mb-3 text-indigo-700 dark:text-indigo-400">Our Vision</h2>
                                <p>
                                    To be the leading platform for managing online and offline education,
                                    promoting lifelong learning and professional growth through technology.
                                </p>
                            </div>

                            {/* Features */}
                            <div>
                                <h2 className="text-2xl font-bold mb-3 text-indigo-700 dark:text-indigo-400">Key Features</h2>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Browse and search a wide range of curated courses</li>
                                    <li>Easy course creation and management tools for instructors</li>
                                    <li>Secure user authentication and personalized dashboards</li>
                                    <li>Enrollment tracking with real-time updates</li>
                                    <li>Dark mode support and mobile-friendly design</li>
                                </ul>
                            </div>

                            {/* Our Team */}
                            <div>
                                <h2 className="text-2xl font-bold mb-3 text-indigo-700 dark:text-indigo-400">Our Team</h2>
                                <p>
                                    We are a team of dedicated developers and educators committed to
                                    improving access to quality education through a streamlined course management system.
                                </p>
                            </div>

                            {/* Why Choose Us */}
                            <div>
                                <h2 className="text-2xl font-bold mb-3 text-indigo-700 dark:text-indigo-400">Why Choose Course Management?</h2>
                                <p>
                                    Unlike generic learning platforms, our system is focused on course management for both
                                    instructors and learners — offering intuitive tools, seamless interactions,
                                    and a commitment to enhancing the learning experience.
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn bg-base-300 dark:bg-gray-700 dark:text-gray-200 border-none">
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
            {/* modal blog */}
            <dialog id="blog_modal" className="modal">
                <div className="modal-box bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">

                    <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                        <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
                            🚀 Course Management: শেখার যাত্রায় একটি নতুন অধ্যায়!
                        </h2>

                        <p className="text-lg text-center mb-10">
                            Course Management হলো এমন একটি ওয়েব অ্যাপ্লিকেশন যা শিক্ষার্থী এবং শিক্ষকদের শেখা ও শেখানোর যাত্রাকে করে তোলে আরও সহজ, কার্যকরী এবং আনন্দদায়ক।
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                                    ✅ কেন ব্যবহার করবেন?
                                </h3>
                                <ul className="list-disc list-inside space-y-2">
                                    <li><strong>📚 সব কোর্স এক জায়গায়:</strong> ফিল্টার ও সার্চ দিয়ে দ্রুত খুঁজুন পছন্দের কোর্স।</li>
                                    <li><strong>🧑‍🏫 ইনস্ট্রাক্টর ফ্রেন্ডলি:</strong> কোর্স যুক্ত করা, এনরোলমেন্ট দেখা খুব সহজ।</li>
                                    <li><strong>📊 এনরোলমেন্ট ট্র্যাকিং:</strong> কে কতবার এনরোল করলো তা ট্র্যাক করুন রিয়েল-টাইমে।</li>
                                    <li><strong>🌙 ডার্ক মোড:</strong> চোখের আরাম বজায় রাখতে থাকছে ডার্ক থিম সাপোর্ট।</li>
                                    <li><strong>📱 রেসপন্সিভ ডিজাইন:</strong> মোবাইল, ট্যাব ও ডেস্কটপে চমৎকারভাবে কাজ করে।</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                                    👥 কে উপকার পাবে?
                                </h3>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>👨‍🎓 শিক্ষার্থী – পছন্দের কোর্স খুঁজে, এনরোল করে ও শেখা সহজ হবে।</li>
                                    <li>👩‍🏫 শিক্ষক – নিজের কোর্স তৈরি ও ম্যানেজ করতে পারবেন সহজে।</li>
                                    <li>🏢 প্রতিষ্ঠান – ট্রেনিং বা কোর্স ম্যানেজমেন্ট করতে চাইলে পারফেক্ট সলিউশন।</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                                    💬 ব্যবহারকারীদের মতামত:
                                </h3>
                                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 dark:text-gray-300">
                                    “Course Management-এর মাধ্যমে আমি খুব সহজেই আমার কোর্সগুলো ম্যানেজ করতে পারি ও এনরোলমেন্ট দেখতে পারি। এক কথায় অসাধারণ!”
                                    <br />
                                    — রাফি, Web Instructor
                                </blockquote>
                            </div>

                            <div className="text-center mt-10">
                                <p className="text-lg font-semibold mb-4">
                                    🎯 শেখা হোক আরও স্মার্ট, আরও সিস্টেমেটিক — <span className="text-blue-600 dark:text-blue-400">Course Management</span> এর সাথে!
                                </p>

                            </div>
                        </div>
                    </section>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn bg-base-300 dark:bg-gray-700 dark:text-gray-200 border-none">
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
            {/* privacy modal */}
            <dialog id="privacy_modal" className="modal">
                <div className="modal-box bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
                    <div className="max-w-full mx-auto">
                        <h1 className="text-3xl font-bold mb-6 text-center">
                            Course Management - Privacy Policy
                        </h1>

                        <div className="space-y-5 max-h-80 overflow-y-auto text-gray-700 dark:text-gray-300 text-justify leading-relaxed px-2">
                            <p>
                                <span className="text-xl font-bold">1. Information Collection: </span>
                                We collect essential information such as your name, email, and course-related activities to personalize your learning experience and keep track of your progress.
                            </p>
                            <p>
                                <span className="text-xl font-bold">2. Data Usage: </span>
                                Your data is used to manage enrollments, track learning activity, and communicate important updates. We do not sell or share your data without your permission.
                            </p>
                            <p>
                                <span className="text-xl font-bold">3. Cookies & Analytics: </span>
                                We use minimal cookies for login sessions and basic analytics to improve user experience. We do not use third-party trackers or ads.
                            </p>
                            <p>
                                <span className="text-xl font-bold">4. Data Security: </span>
                                We apply standard industry security measures (such as HTTPS, token-based authentication, and encrypted storage) to protect your personal data.
                            </p>
                            <p>
                                <span className="text-xl font-bold">5. User Rights: </span>
                                You have full control over your data. You may request access, changes, or deletion of your data anytime through your profile settings or by contacting support.
                            </p>
                        </div>
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn bg-base-300 dark:bg-gray-700 dark:text-gray-200 border-none">
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
            {/* them modal */}
            <dialog id="terms_modal" className="modal">
                <div className="modal-box bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
                    <div className="max-w-full mx-auto">
                        <h1 className="text-3xl font-bold mb-6 text-center">
                            Course Management - Terms and Conditions
                        </h1>

                        <div className="space-y-5 max-h-80 overflow-y-auto text-gray-700 dark:text-gray-300 text-justify leading-relaxed px-2">
                            <p>
                                <span className="text-xl font-bold">1. User Eligibility: </span>
                                Users must be at least 16 years old to register. Providing false information may result in account deactivation.
                            </p>
                            <p>
                                <span className="text-xl font-bold">2. Account Activation: </span>
                                By registering and logging in, you agree to our terms and gain access to course features such as enrollment, content access, and feedback submission.
                            </p>
                            <p>
                                <span className="text-xl font-bold">3. Content Usage: </span>
                                All course materials are for personal educational use only. Redistribution or commercial use is strictly prohibited.
                            </p>
                            <p>
                                <span className="text-xl font-bold">4. User Conduct: </span>
                                Respectful communication is mandatory. Harassment, spamming, or abuse may lead to a ban or permanent account removal.
                            </p>
                            <p>
                                <span className="text-xl font-bold">5. Liability: </span>
                                While we strive to provide accurate and high-quality content, we do not guarantee results from course completion. Users are responsible for their learning progress.
                            </p>
                            <p>
                                <span className="text-xl font-bold">6. Changes to Terms: </span>
                                We may revise these terms periodically. Continued use of the platform implies acceptance of updated terms.
                            </p>
                        </div>
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn bg-base-300 dark:bg-gray-700 dark:text-gray-200 border-none">
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
            {/* help modal */}
            <dialog id="help_modal" className="modal">
                <div className="modal-box bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
                    <div className="max-w-full mx-auto">
                        <h1 className="text-3xl font-bold mb-6 text-center">
                            Course Management - Help Center
                        </h1>

                        <div className="space-y-5 max-h-80 overflow-y-auto text-gray-700 dark:text-gray-300 text-justify leading-relaxed px-2">
                            <p>
                                <span className="text-xl font-bold">1. How to Enroll in a Course? </span>
                                Navigate to the course list and click the "Enroll" button on your desired course. Make sure you're logged in.
                            </p>
                            <p>
                                <span className="text-xl font-bold">2. How to View Enrolled Courses? </span>
                                Go to the "My Enrolled Courses" section from your dashboard to access and manage your enrolled courses.
                            </p>
                            <p>
                                <span className="text-xl font-bold">3. How to Add a New Course (For Instructors)? </span>
                                If you’re an instructor, visit the "Add Course" page and fill in the required details like title, category, and description to publish a new course.
                            </p>
                            <p>
                                <span className="text-xl font-bold">4. How to Edit or Delete a Course? </span>
                                Go to the "Manage Courses" page where all your added courses are listed. You’ll find edit and delete options there.
                            </p>
                            <p>
                                <span className="text-xl font-bold">5. Forgot Password or Can't Login? </span>
                                Try resetting your password from the login page. If the issue persists, contact our support team at <a href="mailto:support@courseplatform.com" className="text-blue-400 underline">mdfaruk01720875872@gmail.com</a>.
                            </p>
                            <p>
                                <span className="text-xl font-bold">6. Need Further Assistance? </span>
                                Feel free to reach out to our support team any time. We're here to help you make the most of your learning experience!
                            </p>
                        </div>
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn bg-base-300 dark:bg-gray-700 dark:text-gray-200 border-none">
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};
export default Modal;