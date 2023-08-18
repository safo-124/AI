import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
    return ( 
        <div>
            UnProtected
            <Link href="/sign-in">
                <Button variant="default">
                    Log in
                </Button>
             </Link>
            <Link href="/sign-up">
                <Button variant="default">
                    Register
                </Button>
             </Link>
        </div>
     );
}
 
export default LandingPage;