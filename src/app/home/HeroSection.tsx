import { Button } from "@/components/button";
import { Card, CardDiv } from "@/components/card";
import { ClockIcon } from "@/components/svgs";

export default function HeroSection() {
    return (
        <section>
            <div
                className={`
                    
                    max-w-screen-xl
                    mx-auto p-10
                    flex flex-col gap-5
                `}
            >
                <h1 className="text-4xl font-bold text-center mt-10">Welcome to my website</h1>
                <p className="text-center text-lg">
                    Greeksoft Technologies is an algorithm development and consulting firm specializing in low latency, high frequency, algorithmic trade execution, order routing and front end solution provider. Besides Front end trading solutions, we also specialize in risk management tools that help your firm to get insights on their trading risks in exchange-traded derivative instruments.
                </p>
                <Button label="Request a demo" className="mx-auto my-5" />
                <div
                    className={`
                        my-5 p-5 rounded-xl
                        flex 
                        md:justify-evenly md:items-start md:flex-wrap md:flex-row
                        justify-center items-center flex-col  
                        shadow-card-s
                    `}
                >
                    <Card>
                        <CardDiv>
                            <ClockIcon theme="#1a41b6" />
                        </CardDiv>
                        <CardDiv>
                            <h2 className="text-xl font-semibold text-center">Dedicated and committed support team.</h2>
                            <p className="text-center">
                                Our dedicated and commited support team provides our client 24-hour support related to our products and solutions.
                            </p>
                        </CardDiv>
                    </Card>
                    <Card>
                        <CardDiv>
                            <ClockIcon theme="#1a41b6" />
                        </CardDiv>
                        <CardDiv>
                            <h2 className="text-xl font-semibold text-center">Domain understanding</h2>
                            <p className="text-center">
                            Being the first vendor in India to successfully implement algo trading, We have the domain knowledge to understand the complexity of trading and providing the right solution
                            </p>
                        </CardDiv>
                    </Card>
                    <Card>
                        <CardDiv>
                            <ClockIcon theme="#1a41b6" />
                        </CardDiv>
                        <CardDiv>
                            <h2 className="text-xl font-semibold text-center">Array of suite's on algorithms.</h2>
                            <p className="text-center">
                            Our array of bunch of algorithms connected to our products and solutions would help you in multiple ways.
                            </p>
                        </CardDiv>
                    </Card>
                </div>
            </div>
        </section>
    )
}