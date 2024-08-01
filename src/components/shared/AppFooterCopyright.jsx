function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg flex  text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<p>Made With ❤️ By</p>
				<a
					href="https://github.com/Yaman-123"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:text-semibold hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					YAMAN	
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
