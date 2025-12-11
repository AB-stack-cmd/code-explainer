import React, { useState } from 'react';

export default function SignUpPage() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* App Name */}
        <h1 className="text-5xl font-bold text-center mb-20">Code-x</h1>
        
        {/* Sign Up Section */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Create an account</h2>
            <p className="text-gray-600">Enter your email to sign up for this app</p>
          </div>
          
          {/* Email Input */}
          <input
            type="email"
            placeholder="email@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-base"
          />
          
          {/* Sign Up Button */}
          <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Sign up with email
          </button>
          
          {/* Divider */}
          <div className="relative flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">or continue with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          
          {/* Google Button */}
          <button className="w-full bg-gray-100 text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-3">
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </button>
          
          {/* Terms */}
          <p className="text-center text-sm text-gray-600 mt-6">
            By clicking continue, you agree to our{' '}
            <a href="#" className="text-black font-medium hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-black font-medium hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
      
      {/* Pagination */}
      {/* <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-gray-900 text-white px-6 py-3 rounded-full">
        {/* <button className="hover:opacity-70 transition-opacity">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button> */}
        {/* <span className="text-sm font-medium">5 / 5</span>
        <button className="hover:opacity-70 transition-opacity">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div> */}

    </div>
  );
}