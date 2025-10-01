function Section({id, children}) {
    return ( 
        <section
            className="carousel-item w-full h-full flex justify-center items-center lg:gap-[10%] max-md:gap-0 flex-wrap max-md:text-center max-lg:flex-col "
            id={id}
        >
            {children}
        </section>
    );
}

export default Section;