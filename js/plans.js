const plans = [
    {
        image: 'credit-card.avif',
        title: 'Lavendr Bloom',
        price: 'from $19/month'
    },
    {
        image: 'bank-card.jpg',
        title: 'Lavendr Ruby',
        price: 'from $25/month'
    }
];

function showPlans(plans) {
    document.querySelector('.choose-plan-content').innerHTML = '';
    let offer = document.createElement('div');
    offer.className = 'top-offers-container';
    offer.innerHTML = `
        <div class="choose-plan-image">
        <img src="img/${plans.image}">
        </div>
        <div class="top-offers">
        <button class="open-top-offers"><div></div></button>
                    <div class="top-offers_header">
                        <h3>${plans.title}</h3>
                        <span>${plans.price}</span>
                    </div>
                    <hr>
                    <span class="top-offers_title">TOP OFFERS</span>
                    <div class="top-offers_list">
                        <div class="top-offer_container">
                            <div class="top-offer_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                    <path
                                        d="M24,104H48v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16H208V104h24a8,8,0,0,0,4.19-14.81l-104-64a8,8,0,0,0-8.38,0l-104,64A8,8,0,0,0,24,104Zm40,0H96v64H64Zm80,0v64H112V104Zm48,64H160V104h32ZM128,41.39,203.74,88H52.26ZM248,208a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H240A8,8,0,0,1,248,208Z">
                                    </path>
                                </svg>
                            </div>
                            <div class="top-offer_description">
                                <h3>Basic Banking Features</h3>
                                <p>Includes essential services like account management, money tranfers, and digital
                                    payments.
                                </p>
                            </div>
                        </div>
                        <hr>
                        <div class="top-offer_container">
                            <div class="top-offer_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56H16a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V64A8,8,0,0,0,240,56ZM193.65,184H62.35A56.78,56.78,0,0,0,24,145.65v-35.3A56.78,56.78,0,0,0,62.35,72h131.3A56.78,56.78,0,0,0,232,110.35v35.3A56.78,56.78,0,0,0,193.65,184ZM232,93.37A40.81,40.81,0,0,1,210.63,72H232ZM45.37,72A40.81,40.81,0,0,1,24,93.37V72ZM24,162.63A40.81,40.81,0,0,1,45.37,184H24ZM210.63,184A40.81,40.81,0,0,1,232,162.63V184Z"></path></svg>
                            </div>
                            <div class="top-offer_description">
                                <h3>Core Banking Services</h3>
                                <p>Offers key functionalities like account management, payment services, and secure money transfers.
                                </p>
                            </div>
                        </div>
                        <hr>
                        <div class="top-offer_container">
                            <div class="top-offer_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z"></path></svg>
                            </div>
                            <div class="top-offer_description">
                                <h3>Basic Financial Services</h3>
                                <p>Includes the fundamental services such as account handling, money transfers, and online payments.
                                </p>
                            </div>
                        </div>
                        <hr>
                        <div class="top-offer_container">
                            <div class="top-offer_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M230.33,141.06a24.43,24.43,0,0,0-21.24-4.23l-41.84,9.62A28,28,0,0,0,140,112H89.94a31.82,31.82,0,0,0-22.63,9.37L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9ZM164,96a36,36,0,0,0,5.9-.48,36,36,0,1,0,28.22-47A36,36,0,1,0,164,96Zm60-12a20,20,0,1,1-20-20A20,20,0,0,1,224,84ZM164,40a20,20,0,0,1,19.25,14.61,36,36,0,0,0-15,24.93A20.42,20.42,0,0,1,164,80a20,20,0,0,1,0-40Z"></path></svg>
                            </div>
                            <div class="top-offer_description">
                                <h3>Standard Banking Features</h3>
                                <p>Encompasses essential services like account control, digital money transfers, and online transactions.
                                </p>
                            </div>
                        </div>
                    </div>
        </div>
        `;
    document.querySelector('.choose-plan-content').appendChild(offer);
    offer.querySelector('.open-top-offers').addEventListener('click', function () {
    offer.querySelector('.top-offers').classList.toggle('opened');
    });
}

showPlans(plans[0]);
