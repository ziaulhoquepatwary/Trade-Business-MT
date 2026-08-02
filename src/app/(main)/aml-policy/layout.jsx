export const metadata = {
    title: "AML Policy",
    description: "Web Development & Digital Solutions Platform",
};

export default function Services({ children }) {
    return (
        <section className="w-full h-full min-h-screen dark:bg-black">
            {children}
        </section>
    );
} 