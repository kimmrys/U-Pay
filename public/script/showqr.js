(function() {
    let showqrVue = new Vue({
        el: '#showQr',
        data: {
            qrCode: null,
            amount: null
        },
        methods: {
            showQr() {
                let datas = [];
                axios.get('http://localhost:3000/api/showPayment')
                    .then(function(res) {
                        datas = res.data;
                        datas.push(this.amount);
                       
                       
                                
                        
                        // data = res.data.push(this.amount);
                    })
                    .catch(function(err) {

                    });

                    let typeNumber = 0;
                    let errorCorrectionLevel = 'L';
                    let qr = qrcode(typeNumber, errorCorrectionLevel);
                        
                    qr.addData(this.amount);
                    qr.make();
                    this.qrCode = qr.createImgTag(15,50);
                    console.log(datas);
            }
        }
    })
})();