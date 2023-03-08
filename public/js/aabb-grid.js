AFRAME.registerComponent("enter-box", {
    schema: {
        id: {type: 'string', default:'0-2'},
        },
    multiple: false,
    init: function() {
        console.log("enterBox registered");
        const CONTEXT_AF = this;
        CONTEXT_AF.el.addEventListener("hitstart", function(){
            // console.log("Entered box " + CONTEXT_AF.data.id);
            socket.emit('enterBox', CONTEXT_AF.data.id);
        });
    }
});
AFRAME.registerComponent("leave-box", {
    schema: {
        id: {type: 'string', default:'0-2'},
        },
    multiple: false,
    init: function() {
        const CONTEXT_AF = this;
        CONTEXT_AF.el.addEventListener("hitend", function(e){
            // console.log("Left box " + CONTEXT_AF.data.id);
            socket.emit('leaveBox', CONTEXT_AF.data.id);
        });
    }
});
AFRAME.registerComponent("enter-box-win", {
    schema: {
        id: {type: 'string', default:'5-2'},
        },
    multiple: false,
    init: function() {
        const CONTEXT_AF = this;
        CONTEXT_AF.el.addEventListener("hitstart", function(){
            socket.emit('win');
        });
    }
});
AFRAME.registerComponent("enter-box-win-comp", {
    schema: {
        id: {type: 'string', default:'5-2'},
        },
    multiple: false,
    init: function() {
        const CONTEXT_AF = this;
        CONTEXT_AF.el.addEventListener("hitstart", function(){
            socket.emit('win-comp', Date.now());
        });
    }
});
