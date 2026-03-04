export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white w-full text-slate-800 mt-48 py-32">
      <div className="max-w-6xl mx-auto flex flex-col justify-evenly">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-black text-2xl font-bold mb-4">
              Vendy<span className="text-primary">.</span>
            </h2>
            <p>&copy; {currentYear} Vendy Inc. Tous droits réservés.</p>
          </div>

          {/* Colonnes de liens */}
          <div>
            <h3 className="text-black font-semibold mb-4 uppercase text-sm tracking-wider">
              Produit
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Guide d&apos;utilisation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-black  font-semibold mb-4 uppercase text-sm tracking-wider">
              Société
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-black  font-semibold mb-4 uppercase text-sm tracking-wider">
              Légal
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  CGU
                </a>
              </li>
            </ul>
          </div>
        </div>

        
      </div>
    </footer>
  );
}
