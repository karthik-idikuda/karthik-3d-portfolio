export function generateDynamicDialogue(npcId = 'villager') {
    const hooks = [
        "Hey Karthik,",
        "Oh wow,",
        "Greetings,",
        "Hello there!",
        "Fascinating.",
        "I was heavily contemplating,"
    ];
    
    const thoughts = [
        "your 88 GitHub repositories represent immense architectural scale.",
        "serving as CTO at infinall.ai must be incredibly demanding.",
        "OmniNet's ultrasonic acoustic fallback solves so many engineering edge cases.",
        "the PRISM Pharma AI Dashboard is genuinely preventing disasters.",
        "studying at Marwadi University really honed your UX Design skills.",
        "TerraView OS handles real-time spatial routing flawlessly."
    ];

    const questions = [
        "Are you planning to deploy more Next.js environments soon?",
        "When is your self-evolving agent going to be fully open-source?",
        "How do you effectively balance AI model training with full-stack React development?",
        "Should I head towards the Experience zone or the Projects zone next?",
        "Would you be open to building another 3D world just like this one?"
    ];

    // Guaranteeing 180 completely unique sentence permutations natively!
    const hook = hooks[Math.floor(Math.random() * hooks.length)];
    const thought = thoughts[Math.floor(Math.random() * thoughts.length)];
    const question = questions[Math.floor(Math.random() * questions.length)];

    return `${hook} ${thought} ${question}`;
}
