let clickCount=0;const links=[];let clickCount1=0;const exampleLinks1=["https://irritatepillssurly.com/gii9ia68e?key=aec9f52868065a0dba9b446b6bfc7d5e","https://irritatepillssurly.com/dkvxdr5qtj?key=e53a9497d2285856f94848eb29eaec0b","https://irritatepillssurly.com/pfbc4v6gb?key=21ee56e8e18bf973e08e3d253147e21b","https://irritatepillssurly.com/g9mj013eif?key=62fb2ef84707963234ab747dd6ee041c","https://irritatepillssurly.com/x6k4hke8?key=2072a5a64db977fc6d700040b5fb42bf"];async function fetchGrammarlyCookies1(){const url="https://cookiesceo.com/grammarly-download/";const container=document.getElementById("cookieContainer1");const copyButton=document.getElementById("copyButton1");const dateContainer=document.getElementById("dateContainer1");const loader=document.getElementById("loadingSpinner1");const refreshButton=document.getElementById("refreshButton1");loader.style.visibility="visible";container.textContent="Loading Grammarly cookies...";container.style.visibility="visible";refreshButton.style.display="none";container.addEventListener("contextmenu",disableRightClick);container.style.userSelect="none";container.addEventListener("copy",preventCopy);const proxies=["https://api.codetabs.com/v1/proxy/?quest=","https://api.allorigins.win/raw?url=","https://app.scrapingbee.com/api/v1/?api_key=9PXTFOZ5ON6YTWD1KGTJXTKXJ8TADW5L5OILACRWRUEHPMAKDBEO7BDSIIYEK7SLKGSKAXNIKY5BRRRD&url="];let response,htmlText;for(let proxy of proxies){try{response=await fetch(`${proxy}${encodeURIComponent(url)}`);if(response.ok){htmlText=await response.text();break}}catch(error){console.error(`Proxy failed: ${proxy}`,error)}}
if(!htmlText){container.textContent="Error fetching content: All proxies failed.";loader.style.visibility="hidden";refreshButton.style.display="block";return}
const textAreaMatch=htmlText.match(/<textarea[^>]*class="ctc-copy-content"[^>]*>(.*?)<\/textarea>/s);if(textAreaMatch&&textAreaMatch[1]){let grammarlyCookies=textAreaMatch[1].trim();let countdown=60;const countdownInterval=setInterval(()=>{if(countdown>=0){dateContainer.textContent=`Cookies... Will display in ${countdown} seconds`;countdown--}
if(countdown<0){clearInterval(countdownInterval);container.textContent=grammarlyCookies;container.style.visibility="visible";dateContainer.textContent=`Updated: ${new Date().toLocaleString()}`;dateContainer.style.visibility="visible";loader.style.visibility="hidden";copyButton.style.display="block"}},1000);copyButton.addEventListener("click",()=>handleCopyClick1(grammarlyCookies))}else{container.textContent="No textarea content found!";loader.style.visibility="hidden";refreshButton.style.display="block";console.error("Regex did not match textarea content in the fetched HTML.")}}
function handleCopyClick1(grammarlyCookies){clickCount1++;if(clickCount1<=5){window.open(exampleLinks1[clickCount1-1],'_blank');copyButton.textContent=`Click ${6 - clickCount1} more time(s) to copy content`}else if(clickCount1===6){console.log("Attempting to copy text to clipboard...");navigator.clipboard.writeText(grammarlyCookies).then(()=>{console.log("Text copied successfully.");copyButton.textContent="Copied!";setTimeout(()=>copyButton.textContent="Copy to Clipboard",2000)}).catch(err=>{console.error("Clipboard write failed.",err);fallbackCopy(grammarlyCookies)});clickCount1=0}}
function fallbackCopy(text){const textarea=document.createElement("textarea");textarea.value=text;document.body.appendChild(textarea);textarea.select();try{const successful=document.execCommand('copy');console.log(successful?'Text copied to clipboard using fallback method!':'Failed to copy text using fallback method.');copyButton.textContent=successful?"Copied!":"Failed to Copy";setTimeout(()=>copyButton.textContent="Copy to Clipboard",2000)}catch(err){console.error("Failed to copy using fallback:",err);copyButton.textContent="Failed to Copy"}
document.body.removeChild(textarea)}
function disableRightClick(event){event.preventDefault()}
function preventCopy(event){event.preventDefault()}
document.addEventListener("DOMContentLoaded",fetchGrammarlyCookies1);function refreshContent1(){document.getElementById("refreshButton1").style.display="none";fetchGrammarlyCookies1()}
