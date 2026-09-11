import React from 'react';

interface ResumeViewProps {
  onNavigateHome: () => void;
}

const ResumeView: React.FC<ResumeViewProps> = ({ onNavigateHome }) => {
  const pdfUrl = '/RESUME_JEEVAN.pdf';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Top Navbar Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center text-sm font-semibold text-gray-700 hover:text-indigo-600 bg-gray-100 hover:bg-indigo-50 px-4 py-2 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Portfolio
            </button>
            <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">
              Jeevan Jiji <span className="text-indigo-600 font-medium text-base ml-1">| Resume</span>
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg shadow-sm transition-colors"
            >
              <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open PDF
            </a>
            <a
              href={pdfUrl}
              download="Resume_Jeevan_Jiji.pdf"
              className="inline-flex items-center text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8 flex flex-col items-center">
        {/* Banner Section */}
        <div className="w-full max-w-5xl bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200/80 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center space-x-2">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  Curriculum Vitae
                </span>
                <span className="text-gray-400 text-sm">•</span>
                <span className="text-gray-600 text-sm">Updated 2026</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                Jeevan Jiji
              </h2>
              <p className="text-gray-600 mt-1">
                Integrated MCA Graduate | Full-Stack & Game Developer
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium bg-gray-100 text-gray-700 py-1.5 px-3 rounded-md">Full-Stack Web</span>
              <span className="text-xs font-medium bg-gray-100 text-gray-700 py-1.5 px-3 rounded-md">React & Node.js</span>
              <span className="text-xs font-medium bg-gray-100 text-gray-700 py-1.5 px-3 rounded-md">Python & Pygame</span>
              <span className="text-xs font-medium bg-gray-100 text-gray-700 py-1.5 px-3 rounded-md">Game Development</span>
            </div>
          </div>
        </div>

        {/* PDF Preview Container */}
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col">
          <div className="bg-gray-100 border-b border-gray-200 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="text-xs font-mono text-gray-500 ml-2">resume_jeevan.pdf</span>
            </div>
            <div className="text-xs text-gray-500 font-medium">
              Interactive PDF Document
            </div>
          </div>

          <div className="relative w-full bg-gray-900/5 min-h-[600px] md:min-h-[850px] flex items-center justify-center">
            <object
              data={pdfUrl}
              type="application/pdf"
              className="w-full h-[650px] md:h-[850px]"
            >
              {/* Fallback iframe */}
              <iframe
                src={pdfUrl}
                title="Resume Preview"
                className="w-full h-[650px] md:h-[850px] border-0"
              >
                <div className="p-8 text-center bg-white rounded-lg shadow-md max-w-md mx-auto my-12">
                  <svg className="w-12 h-12 text-indigo-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-gray-800 font-semibold mb-2">Unable to display PDF preview directly.</p>
                  <p className="text-gray-600 text-sm mb-6">Your browser may not support embedded PDFs.</p>
                  <a
                    href={pdfUrl}
                    download="Resume_Jeevan_Jiji.pdf"
                    className="inline-flex items-center text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-5 py-2.5 rounded-lg shadow transition-colors"
                  >
                    Download Resume PDF
                  </a>
                </div>
              </iframe>
            </object>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Jeevan Jiji. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ResumeView;
