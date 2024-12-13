export default function Navbar(props: any) {
    return (
        <nav className="bg-slate-800 rounded-xl p-3 flex justify-center">
            {props.children}
        </nav>
    );
}