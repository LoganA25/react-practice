// destructuring props
// props = {
// 	children: ReactNode
// }
// {children} = props

// this is a component
export function Container({ children }) {
	return <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>;
}
