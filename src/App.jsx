import { useState } from "react";
import "./App.css";




const sweets = [
  {
    name: "Kaju Katli",
    description:
      "Delicate cashew fudge with a rich, melt-in-your-mouth texture.",
    price: "₹ 1000kg",
    image: "/images/kaju-katli-1.jpg",
    alt: "Kaju Katli sweets",
  },
  {
    name: "Motichoor Laddu",
    description:
      "Soft, golden boondi laddus prepared in a traditional style.",
    price: "₹ 300kg",
    image: "/images/motichoor laddu.jpeg",
    alt: "Motichoor Laddu",
  },
  {
    name: "Besan Laddu",
    description:
      "Classic besan laddus with a fragrant, homemade-style taste.",
    price: "₹ 200kg",
    image: "/images/besanladdu.jpeg",
    alt: "Besan Laddu",
  },
  {
    name: "Gulab Jamun",
    description:
      "Soft golden dumplings soaked in aromatic sugar syrup.",
    price: "₹ 200kg",
    image: "/images/gulab jamun.webp",
    alt: "Gulab Jamun",
  },
  {
    name: "Peda",
    description:
      "Traditional milk-based peda with a creamy, festive flavour.",
    price: "₹ 350kg",
    image: "/images/peda.jpeg",
    alt: "Peda sweets",
  },
  {
    name: "Rasmalai",
    description:
      "Soft milk dumplings served in creamy, lightly flavoured milk.",
    price: "₹50 piece",
    image: "/images/rasmalai.jpeg",
    alt: "Rasmalai",
  },
  {
    name: "Jalebi",
    description:
      "Crisp, golden spirals soaked in sweet syrup.",
    price: "₹ 200kg",
    image: "/images/crispy-jalebi.webp",
    alt: "Jalebi",
  },
  {
    name: "Milk Cake",
    description:
      "Rich traditional milk sweet with a beautifully grainy texture.",
    price: "₹ 400kg",
    image: "/images/milk cake.jpeg",
    alt: "Milk Cake",
  },
];

const specialities = [
  "Freshly prepared sweets",
  "Traditional Indian recipes",
  "Premium quality ingredients",
  "Perfect for festivals and celebrations",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#fffaf2] text-[#4a2c20]">

      {/* ==================== NAVBAR ==================== */}

      <header className="sticky top-0 z-50 border-b border-[#ead9b6] bg-[#fffaf2]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

          {/* Logo */}

          <a
            href="#home"
            onClick={closeMenu}
            className="text-2xl font-bold tracking-wide text-[#4a2c20]"
          >
            Shree Hari{" "}
            <span className="text-[#b88a2f]">
              Sweets
            </span>
          </a>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="rounded-md border border-[#ead9b6] p-2 md:hidden"
          >
            <span className="block h-0.5 w-6 bg-[#4a2c20]" />
            <span className="my-1.5 block h-0.5 w-6 bg-[#4a2c20]" />
            <span className="block h-0.5 w-6 bg-[#4a2c20]" />
          </button>

          {/* Navigation Links */}

          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } absolute left-0 top-full w-full flex-col border-b border-[#ead9b6] bg-[#fffaf2] px-5 py-4 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}
          >

            <a
              href="#home"
              onClick={closeMenu}
              className="py-2 text-sm font-medium transition hover:text-[#b88a2f]"
            >
              Home
            </a>

            <a
              href="#our-sweets"
              onClick={closeMenu}
              className="py-2 text-sm font-medium transition hover:text-[#b88a2f]"
            >
              Our Sweets
            </a>

            <a
              href="#about-us"
              onClick={closeMenu}
              className="py-2 text-sm font-medium transition hover:text-[#b88a2f]"
            >
              About Us
            </a>

            <a
              href="#specialities"
              onClick={closeMenu}
              className="py-2 text-sm font-medium transition hover:text-[#b88a2f]"
            >
              Specialities
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="py-2 text-sm font-medium transition hover:text-[#b88a2f]"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-[#b88a2f] px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:opacity-90 md:mt-0"
            >
              Order Now
            </a>

          </div>
        </nav>
      </header>

      {/* ==================== MAIN ==================== */}

      <main>

        {/* ==================== HERO SECTION ==================== */}

        <section
          id="home"
          className="relative flex min-h-[78vh] items-center overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(rgba(50, 30, 20, 0.42), rgba(50, 30, 20, 0.55)), url('/images/background1.png')",
            backgroundPosition: "center",
            backgroundSize: "full",
          }}
        >
          <div className="mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">

            <div className="max-w-2xl text-white">

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#f4d99a]">
                Traditional Taste • Ayodhya
              </p>

              <h1 className="text-5xl font-bold leading-tight md:text-7xl">
                The Sweet Taste of Tradition
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/90">
                Welcome to Shree Hari Sweets — where timeless Indian
                flavours meet freshness, quality, and the warmth of
                tradition.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="#our-sweets"
                  className="rounded-full bg-[#b88a2f] px-7 py-3.5 font-semibold text-white transition hover:opacity-90"
                >
                  Explore Our Sweets
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-[#4a2c20]"
                >
                  Contact Us
                </a>

              </div>

            </div>
          </div>
        </section>

        {/* ==================== OUR SWEETS ==================== */}

        <section
          id="our-sweets"
          className="px-5 py-20 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">

            {/* Heading */}

            <div className="mx-auto mb-12 max-w-2xl text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b88a2f]">
                Our Collection
              </p>

              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Our Sweets
              </h2>

              <p className="mt-4 leading-7 text-[#4a2c20]/70">
                Discover some of our favourite traditional Indian sweets,
                prepared with care for every celebration.
              </p>

            </div>

            {/* Sweet Cards */}

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

              {sweets.map((sweet) => (

                <article
                  key={sweet.name}
                  className="overflow-hidden rounded-2xl border border-[#ead9b6] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* Image */}

                  <div className="aspect-square overflow-hidden bg-[#f5ead8]">

                    <img
                      src={sweet.image}
                      alt={sweet.alt}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />

                  </div>

                  {/* Content */}

                  <div className="p-5">

                    <h3 className="text-xl font-bold">
                      {sweet.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#4a2c20]/70">
                      {sweet.description}
                    </p>

                    <p className="mt-4 font-semibold text-[#b88a2f]">
                      {sweet.price}
                    </p>

                  </div>

                </article>

              ))}

            </div>
          </div>
        </section>

        {/* ==================== ABOUT US ==================== */}

        <section
          id="about-us"
          className="bg-[#f6eddf] px-5 py-20 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

            {/* About Image */}

            <div className="overflow-hidden rounded-3xl">

              <img
                src="./images/sweet shop.jpeg"
                alt="Fresh traditional sweets"
                className="h-[420px] w-full object-cover"
              />

            </div>

            {/* About Text */}

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b88a2f]">
                About Us
              </p>

              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Made With Tradition, Served With Love
              </h2>

              <p className="mt-6 leading-8 text-[#4a2c20]/75">
                At Shree Hari Sweets, our aim is simple: to bring the
                familiar taste of traditional Indian mithai to every
                celebration.
              </p>

              <p className="mt-4 leading-8 text-[#4a2c20]/75">
                From family occasions to festivals and everyday moments,
                we believe a good sweet can make a memorable moment even
                sweeter.
              </p>

            </div>

          </div>
        </section>

        {/* ==================== SPECIALITIES ==================== */}

        <section
          id="specialities"
          className="px-5 py-20 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">

            {/* Heading */}

            <div className="mx-auto mb-12 max-w-2xl text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b88a2f]">
                Why Choose Us
              </p>

              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Our Specialities
              </h2>

            </div>

            {/* Speciality Cards */}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {specialities.map((item, index) => (

                <div
                  key={item}
                  className="rounded-2xl border border-[#ead9b6] bg-white p-7 text-center shadow-sm"
                >

                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f6eddf] text-xl font-bold text-[#b88a2f]">
                    {index + 1}
                  </div>

                  <h3 className="mt-5 font-bold">
                    {item}
                  </h3>

                </div>

              ))}

            </div>
          </div>
        </section>

        {/* ==================== CONTACT ==================== */}

        <section
          id="contact"
          className="bg-[#4a2c20] px-5 py-20 text-white lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

            {/* Contact Information */}

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f4d99a]">
                Visit Us
              </p>

              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Bring Home Something Sweet
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-white/75">
                Visit Shree Hari Sweets in Ayodhya, Uttar Pradesh, or
                contact us for orders and enquiries.
              </p>

              <div className="mt-8 space-y-4 text-white/90">

                <p>
                  📍 Ayodhya, Uttar Pradesh, India
                </p>

                <p>
                  📞 Replace this with your real phone number
                </p>

                <p>
                  💬 Replace this with your WhatsApp number
                </p>

              </div>

            </div>

            {/* Google Maps */}

            <div className="rounded-3xl bg-white/10 p-7">

              <h3 className="text-2xl font-bold">
                Find Us in Ayodhya
              </h3>

              <p className="mt-3 leading-7 text-white/75">
                Add your exact shop address and Google Maps link here
                when you have them.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Shree+Hari+Sweets+Ayodhya"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-[#b88a2f] px-6 py-3 font-semibold transition hover:opacity-90"
              >
                Open Google Maps
              </a>

            </div>

          </div>
        </section>

      </main>

      {/* ==================== FOOTER ==================== */}

      <footer className="bg-[#352019] px-5 py-7 text-center text-sm text-white/65">

        © {new Date().getFullYear()} Shree Hari Sweets.
        All rights reserved.

      </footer>

    </div>
  );
}

export default App;