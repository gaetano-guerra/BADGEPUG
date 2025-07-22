import Head from "next/head";

export default function BadgePage() {
  const name = "Gaetano";
  const role = "Developer"; // Puoi personalizzare il ruolo

  return (
    <>
      <Head>
        <title>Badge di {name} - PUG!</title>
        <meta property="og:title" content={`Badge di ${name} - PUG!`} />
        <meta property="og:description" content={`Badge digitale per ${name}, ruolo: ${role} (PUG!)`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/badge-og.png" />
        <meta property="og:url" content="https://tuo-dominio.vercel.app/badge" />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-blue-200">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
          <span className="text-2xl font-bold text-blue-700 mb-2">{name}</span>
          <span className="text-lg text-gray-600">{role}</span>
          <span className="mt-4 text-xs text-gray-400">PUG! Badge WebApp</span>
        </div>
      </div>
    </>
  );
}