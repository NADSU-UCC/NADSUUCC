// List of market days
const marketDays = [ 'CHARIE', 'JANG', 'WA', 'KALEO','SANKANA','KPERISI'];

const startDate = new Date('2024-11-04');

// Weekdays array to align with the JavaScript date object (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function checkMarketDay() {
    const today = new Date();
    const diffTime = Math.abs(today - startDate); 
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    const marketDayIndex = diffDays % marketDays.length;
    const currentMarketDay = marketDays[marketDayIndex]
    
    const nextMarketDay = marketDays[(marketDayIndex + 1) % marketDays.length];

    const message = `Today's Market Day: ${currentMarketDay}\n\nNext Market Day: ${nextMarketDay}`;
    window.alert(message)
}

function payDues(){
    const message1 = `MOMOPAY: 531814\nNAME: NADSU UCC LOCAL\n\nDUES PER SEMESTER: 10.00\nWELFARE FUND PER YEAR: 5.00\n\n You are reminded to use your name as reference and also CONTACT or send a SCREENSHOT after payment to the Financial secretary (Martha Kala). Check NADSU's Executive page to contact her. Thank You`;
    window.alert(message1)
}

function toggleMenu() {
    const navButtons = document.querySelector('.nav-buttons');
    navButtons.classList.toggle('show');
}
