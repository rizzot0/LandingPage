import { FaEnvelope as Mail } from 'react-icons/fa'; 
import Link from 'next/link'; 
import { buttonVariants } from './ui/button';
import { Paperclip } from 'lucide-react';
import Container from './shared/container';

const Introduction = () => {
    return (  
        <Container>
            <div className="text-center" id="home">
                <h3 className="text-xl mb-3">Hello </h3>
                <h1 className="text-4xl font-bold mb-3">rizzoto</h1>
                <h2 className="text-2xl text-gray-400">Developer</h2>
                <div className="flex items-center">
                    <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
                        <Link href="#contact" className={buttonVariants()} > 
                            <Mail className="mr-2"/> Contact
                        </Link>
                        <Link href="/cv-tarre.pdf"  target="_blank" className={buttonVariants({variant: 'secondary'} )}> 
                            <Paperclip className="mr-2"/> Descargar Curriculum
                        </Link>
                    </div>
                </div>
                <img src="/profile.png" alt="Profile pic" width={500} height={500} />
            </div>
        </Container>
    );
}
 
export default Introduction;
