import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">O Kancelarii</h2>
            <p className="mb-6">
              Nasze doświadczenie obejmuje ponad 18 lat w branży prawniczej, w tym 14 lat prowadzenia 
              Kancelarii Radcy Prawnego oraz pracę w organach wymiaru sprawiedliwości.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">18+</div>
                <div className="text-gray-600">Lat doświadczenia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">1000+</div>
                <div className="text-gray-600">Spraw prowadzonych</div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Nasi Prawnicy</h3>
              <div className="mb-6">
                <h4 className="font-semibold">Radca prawny Agata Cichosz-Nalepa</h4>
                <p className="text-gray-600">
                  Absolwentka Wydziału Prawa i Administracji Uniwersytetu Łódzkiego. 
                  Ukończyła aplikację radcowską w Okręgowej Izbie Radców Prawnych w Łodzi.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Adwokat Szymon Kanclerski</h4>
                <p className="text-gray-600">
                  Absolwent Wydziału Prawa i Administracji Uniwersytetu Łódzkiego. 
                  Ukończył aplikację prokuratorską.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
