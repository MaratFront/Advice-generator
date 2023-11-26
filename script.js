let API="https://api.adviceslip.com/advice";
const Advice=async ()=> {
    const AdviceText=document.querySelector('.Advice__text');
    const AdviceTitle=document.querySelector('.Advice__title');
    const AdviceButton=document.querySelector('.Advice__btn');
    try {
        const getRes = await fetch(API);
        const data= await getRes.json();
        if(getRes.ok) {
            let newArr=Object.entries(data);
            AdviceTitle.innerText=`Advice # ${newArr[0][1].id}`;
            AdviceText.innerText=`" ${newArr[0][1].advice}"`;
            AdviceButton.addEventListener("click", async () => {
                try {
                    const updatedRes = await fetch(API); 
                    const updatedData = await updatedRes.json();
                    if(updatedRes.ok) {
                        let updatedArr = Object.entries(updatedData);
                        AdviceTitle.innerText=`Advice # ${updatedArr[0][1].id}`;
                        AdviceText.innerText=`" ${updatedArr[0][1].advice}"`;
                    }
                } catch(error) {
                    console.error(error);
                }
            })
        }
    } catch(error) {
        console.error(error);
    }
}
Advice();