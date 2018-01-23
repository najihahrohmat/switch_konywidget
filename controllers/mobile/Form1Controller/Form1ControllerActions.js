define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onSlide defined for switchOpt **/
    AS_Switch_hac01d18c48d42caa1220de5955d0331: function AS_Switch_hac01d18c48d42caa1220de5955d0331(eventobject) {
        var self = this;
        if ((self.view.switchOpt.selectedIndex == textOff)) {
            authUsingTouchID.call(this);
        } else {
            offSwitch.call(this);
        }
    },
    /** onClick defined for FlexContainer0e9a8b319897e4c **/
    AS_FlexContainer_c4f03cd077d744f6a8d06fbb9b53a4f2: function AS_FlexContainer_c4f03cd077d744f6a8d06fbb9b53a4f2(eventobject) {
        var self = this;
        return authUsingTouchID.call(this);
    }
});