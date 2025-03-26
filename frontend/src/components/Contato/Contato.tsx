import Image from "next/image"

interface ContactItem {
	icon: string
	alt: string
	label: string
	value: string
	href: string
}

const Contato = () => {
	const contacts: ContactItem[] = [
		{
			icon: "/mail.svg",
			alt: "Ícone de e-mail",
			label: "E-mail",
			value: "nogbianca@outlook.com",
			href: "mailto:nogbianca@outlook.com",
		},
		{
			icon: "/phone.svg",
			alt: "Ícone de telefone",
			label: "Telefone",
			value: "(19) 99609-7990",
			href: "https://api.whatsapp.com/send?phone=5519996097990",
		},
		{
			icon: "/linkedin.svg",
			alt: "Ícone do LinkedIn",
			label: "LinkedIn",
			value: "@biancasilvanogueira",
			href: "https://www.linkedin.com/in/biancasilvanogueira/",
		},
		{
			icon: "/github.svg",
			alt: "Ícone do GitHub",
			label: "GitHub",
			value: "@biancasnogueira",
			href: "https://github.com/biancasnogueira",
		},
	]

	return (
		<section
			id="contato"
			className="container mx-auto flex flex-col items-center justify-center py-8 px-4"
		>
			<h2 className="text-2xl font-bold mb-8 text-center">Contatos</h2>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl">
				{contacts.map((contact, index) => (
					<ContactCard key={index} {...contact} />
				))}
			</div>
		</section>
	)
}

const ContactCard = ({ icon, alt, label, value, href }: ContactItem) => {
	return (
		<div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="flex flex-col items-center gap-2"
			>
				<div className="bg-[#212121] border-2 border-[#521797] rounded-full h-10 w-10 flex items-center justify-center">
					<Image src={icon} alt={alt} width={20} height={20} className="h-5 w-5" />
				</div>
				<p className="font-medium">{label}</p>
				<p className="text-sm text-gray-300">{value}</p>
			</a>
		</div>
	)
}

export default Contato
