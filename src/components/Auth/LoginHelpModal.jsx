"use client"

const LoginHelpModal = ({ show, onClose }) => {
  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black/70 dark:bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 rounded-2xl shadow-2xl w-[90%] max-w-md border border-gray-200 dark:border-gray-700 animate-in zoom-in-95 duration-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
            <span className="text-xl">🔐</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Demo Login Credentials</h2>
        </div>

        <div className="space-y-4">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">👨‍💼</span>
              <strong className="text-emerald-800 dark:text-emerald-300 font-semibold">Admin</strong>
            </div>
            <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <p>
                Email:{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-emerald-700 dark:text-emerald-400 font-mono">
                  admin@me.com
                </code>
              </p>
              <p>
                Password:{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-emerald-700 dark:text-emerald-400 font-mono">
                  123
                </code>
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">👨‍💻</span>
              <strong className="text-blue-800 dark:text-blue-300 font-semibold">Employee 1</strong>
            </div>
            <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <p>
                Email:{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-blue-700 dark:text-blue-400 font-mono">
                  e@e.com
                </code>
              </p>
              <p>
                Password:{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-blue-700 dark:text-blue-400 font-mono">
                  123
                </code>
              </p>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">👨‍💻</span>
              <strong className="text-purple-800 dark:text-purple-300 font-semibold">Employee 2</strong>
            </div>
            <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <p>
                Email:{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-purple-700 dark:text-purple-400 font-mono">
                  employee2@example.com
                </code>
              </p>
              <p>
                Password:{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-purple-700 dark:text-purple-400 font-mono">
                  123
                </code>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginHelpModal
