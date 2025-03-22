import ConteudoMD from "../shared/ConteudoMD";

export interface ReadmeProps {
	markdown: string;
}

export default function Readme(props: ReadmeProps) {
	return (
		<div 
			className="flex max-w-full flex-col items-stretch 
				px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 
				bg-black border border-zinc-800 rounded-2xl overflow-hidden"
		>
			<div className="prose prose-zinc prose-invert max-w-full">
				<ConteudoMD markdown={props.markdown} />
			</div>
		</div>
	);
}