"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var SceneBonus = /** @class */ (function (_super) {
        __extends(SceneBonus, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function SceneBonus() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        // Initializing and Instantiating
        SceneBonus.prototype.Start = function () {
            //instantiate a new Text object
            this._endLabel = new objects.Label("End Scene", "80px", "Consolas", "#FFFF00", 320, 180, true);
            // buttons
            this._backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 320, 430, true);
            this.Main();
        };
        SceneBonus.prototype.Update = function () {
        };
        SceneBonus.prototype.Main = function () {
            this.addChild(this._endLabel);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                config.Game.SCENE = scenes.State.PLAY;
            });
        };
        return SceneBonus;
    }(objects.Scene));
    scenes.SceneBonus = SceneBonus;
})(scenes || (scenes = {}));
//# sourceMappingURL=SceneBonus.js.map