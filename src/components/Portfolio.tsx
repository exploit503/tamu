const collaboratingCompanies = [
  {
    name: 'Tahir Electricals',
    image: 'images/companies/tahir.png',
    link: 'https://cisl.vercel.app/'
  },
  {
    name: 'Agape Church',
    image: 'images/companies/agape.png',
    link: 'https://agape-gamma.vercel.app/'
  },
  {
    name: 'M-a Events',
    image: 'images/companies/ma.png',
    link: 'https://maevents.site/'
  },
  {
    name: 'Flamia',
    image: 'images/cpmpanies/',
    link: 'https://flamia.store/refill'
  }
];

export default function Portfolio() {
  return (
    <div id="portfolio" className="py-16 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Collaborating Companies with Tamu</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {collaboratingCompanies.map((company, index) => (
            <a
              key={index}
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={company.image}
                alt={company.name}
                className="h-24 object-contain"
                title={company.name}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
