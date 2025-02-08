import { Mistral } from '@mistralai/mistralai';

const apiKey = process.env.MISTRAL_API_KEY;

const client = new Mistral({apiKey: apiKey});

export async function mistral(input:string):Promise<string>{
    try{
        const chatResponse = await client.chat.complete({
            model: 'mistral-small-latest',
            messages: [{role: 'user', content: input}],
            });
        
            if(chatResponse.choices && chatResponse.choices.length > 0) {
                return chatResponse.choices[0].message.content ?? "no response from mistral"
            }else{
                return "no choiced in response"
            }
    }catch(error){
        console.error("Mistral API Error:", error);
        return "Error fetching response";
    }
}
