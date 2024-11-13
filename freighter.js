// If session variables exist
let freighter_wallet_list='Freighter,Lobstr';
if ("afr_address" in sessionStorage && sessionStorage.getItem("afr_address").length === 56 && "afr_network" in sessionStorage && sessionStorage.getItem("afr_network") === 'PUBLIC' && "afr_wallet" in sessionStorage && freighter_wallet_list.includes(sessionStorage.getItem("afr_wallet")) ) {	
	
const walletDIV = document.getElementById("wallets");
let left = sessionStorage.getItem("afr_address").substring(0, 5);
let right = sessionStorage.getItem("afr_address").substring(sessionStorage.getItem("afr_address").length - 5);
	//walletDIV.innerHTML = '<a href="wallet.html"><button type="button" class="btn btn-warning btn-label"><i class="ri-wallet-3-line label-icon align-middle fs-16 me-2"></i> ' + left + '...' + right + '</button></a>';
	// Set walletDIV if exists
	console.log(walletDIV);	
	if (walletDIV) {
	walletDIV.innerHTML = '<div class="btn-group"><a href="wallet.html"><button type="button" class="btn btn-warning btn-label"><i class="ri-wallet-3-line label-icon align-middle fs-16 me-2"></i> '  + left + '...' + right + '</button></a><button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button><div class="dropdown-menu"><a class="dropdown-item" href="wallet.html"><i class="ri-wallet-3-line label-icon align-middle fs-16 me-2"></i> Afreum Wallet</a><a class="dropdown-item" href="javascript:void(0)" onclick="logout();"><i class="ri-logout-box-r-line label-icon align-middle fs-16 me-2"></i> Logout</a></div></div>';
    }
}
else {                            

// checkFreighter Function
function checkFreighter() {

		// Start If
		if (window.freighterApi.isConnected()) {
			//alert("User has Freighter!");

			// Get Public Key
			var error;
			var publicKey;
			const retrievePublicKey = async () => {
				try {
					publicKey = await window.freighterApi.getPublicKey();		
				} 
				catch (e) {
					error = e;
				}

				if (error) {				
					return error;
					const nwToast = document.getElementById('noWalletToast');
					const toast4 = new bootstrap.Toast(nwToast);
					toast4.show();		
				}

				return publicKey;
			};
			// Get Public Key
			
			// Check Result
			retrievePublicKey().then(result =>{
			//console.log(result);
			
				// Check Public Key Length
				if (result.length === 56) {

					// Get Network
					var error;
					var network;
					const retrieveNetwork = async () => {
							try {
								network = await window.freighterApi.getNetwork();
							} 
							catch (e) {
								error = e;
							}

							if (error) {
								const nfToast = document.getElementById('networkFailToast');
								const toast2 = new bootstrap.Toast(nfToast);
								toast2.show();
								return error;				
							}

							return network;				
					};

						retrieveNetwork().then(resultn =>{
						//console.log(resultn);
						// If Public Network
						if (resultn === 'PUBLIC') {
							// Set the session storage
							sessionStorage.setItem("afr_address", result);
							sessionStorage.setItem("afr_network", resultn);
							sessionStorage.setItem("afr_wallet", 'Freighter');
						
							window.open('wallet.html',"_top");
							//const wsToast = document.getElementById('walletSuccessToast');						
							//const toast1 = new bootstrap.Toast(wsToast);
							//toast1.show();						
						}
						else {
							const nfToast = document.getElementById('networkFailToast');
							const toast2 = new bootstrap.Toast(nfToast);
							toast2.show();
						}
						// If Public Network					
						})

				}
				else {					
					const wfToast = document.getElementById('walletFailToast');
					const toast3 = new bootstrap.Toast(wfToast);
					toast3.show();
				}
				// Check Public Key Length

			})
			// Check Result	
	
		}

		else  {  
			const nwToast = document.getElementById('noWalletToast');
			const toast4 = new bootstrap.Toast(nwToast);
			toast4.show();
		}
		// End Else

}
// checkFreighter Function
}