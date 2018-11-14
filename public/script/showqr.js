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
                        
                        
                        // data = res.data.push(this.amount);
                    })
                    .catch(function(err) {

                    });
                datas.push('asd');
                console.log(datas);
                let typeNumber = 0;
                let errorCorrectionLevel = 'L';
                let qr = qrcode(typeNumber, errorCorrectionLevel);
                
                qr.addData(datas);
                qr.make();
                this.qrCode = qr.createSvgTag(15,50);
                console.log(data);
            }
        }
    })
})();