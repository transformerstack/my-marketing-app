export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <span className="font-bold text-indigo-600 text-base">Acme</span>
        <p>© {new Date().getFullYear()} Acme Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Terms</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
