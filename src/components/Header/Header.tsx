const Header = (props:{darkMode: boolean, toggleDarkMode: any}) => {
    const {darkMode, toggleDarkMode} = props;
return(
    <header className="flex items-center justify-between h-16 px-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
    <h1 className="text-xl font-bold text-gray-900 dark:text-white">ERP Application</h1>
    <button onClick={toggleDarkMode}>
      {darkMode ? (
        <svg className="h-6 w-6 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.66-8.66h-1m-16 0h-1M4.22 4.22l.7.7m12.02-12.02l-.7.7M4.22 19.78l.7-.7m12.02 12.02l-.7-.7" />
        </svg>
      ) : (
        <svg className="h-6 w-6 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.293 14.293a8 8 0 11-11.314 0 8 8 0 0111.314 0zM12 9v3l2 2" />
        </svg>
      )}
    </button>
  </header>
)
}

export default Header;