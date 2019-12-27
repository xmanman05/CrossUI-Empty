// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput3")
                .setRequired(true)
                .setDirtyMark(false)
                .setLeft("25.833333333333332em")
                .setTop("7.5em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("File")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput16")
                .setDirtyMark(false)
                .setLeft("25.833333333333332em")
                .setTop("13.333333333333334em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("File")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label7")
                .setLeft("23.333333333333332em")
                .setTop("5.833333333333333em")
                .setWidth("19.083333333333332em")
                .setHeight("2em")
                .setCaption("Audio")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label8")
                .setLeft("30.833333333333332em")
                .setTop("10.833333333333334em")
                .setWidth("12.416666666666666em")
                .setHeight("2.8333333333333335em")
                .setCaption("Bypass")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});