"use strict";
/**
 * Julio Vinicius A. de Carvalho
 * 301016383
 * Feb 22, 2020
 * Roll Dices - Test 1
 * COMP397 - Web Gaming Development
 */
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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            // Defining the table background.
            this._table = new objects.Image(config.Game.ASSETS.getResult("table"), "table", 0, 0, false);
            //this._table.width = 640;
            //this._table.height = 580;
            this._table.scaleX = this._table.width;
            this._table.scaleY = this._table.height;
            // buttons
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 550, true);
            this._nextButton = new objects.Button(config.Game.ASSETS.getResult("nextButton"), 520, 550, true);
            // dices            
            this._dice1 = new objects.Image(config.Game.ASSETS.getResult("1"), "dice1", 110, 110, true);
            this._dice2 = new objects.Image(config.Game.ASSETS.getResult("2"), "dice2", 310, 110, true);
            this._dice3 = new objects.Image(config.Game.ASSETS.getResult("3"), "dice3", 510, 110, true);
            this._dice4 = new objects.Image(config.Game.ASSETS.getResult("4"), "dice4", 110, 360, true);
            this._dice5 = new objects.Image(config.Game.ASSETS.getResult("5"), "dice5", 310, 360, true);
            this._dice6 = new objects.Image(config.Game.ASSETS.getResult("6"), "dice6", 510, 360, true);
            // labels
            this._lbl1 = new objects.Label("1", "22px", "Consolas", "#000000", 110, 220, true);
            this._lbl2 = new objects.Label("2", "22px", "Consolas", "#000000", 310, 220, true);
            this._lbl3 = new objects.Label("3", "22px", "Consolas", "#000000", 510, 220, true);
            this._lbl4 = new objects.Label("4", "22px", "Consolas", "#000000", 110, 470, true);
            this._lbl5 = new objects.Label("5", "22px", "Consolas", "#000000", 310, 470, true);
            this._lbl6 = new objects.Label("6", "22px", "Consolas", "#000000", 510, 470, true);
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        // Rolls the dices and changes de image and the text in the labels.
        Play.prototype.RollDices = function () {
            var outCome = [0, 0, 0, 0, 0, 0];
            var dice;
            for (dice = 0; dice < 6; dice++) {
                outCome[dice] = Math.floor(util.Mathf.RandomRange(1, 6));
                console.log("Dice " + dice + " is " + outCome[dice]);
                if (dice == 0) {
                    this._dice1.setImage(config.Game.ASSETS.getResult(outCome[dice]));
                    this._lbl1.setText(outCome[dice].toString());
                }
                if (dice == 1) {
                    this._dice2.setImage(config.Game.ASSETS.getResult(outCome[dice]));
                    this._lbl2.setText(outCome[dice].toString());
                }
                if (dice == 2) {
                    this._dice3.setImage(config.Game.ASSETS.getResult(outCome[dice]));
                    this._lbl3.setText(outCome[dice].toString());
                }
                if (dice == 3) {
                    this._dice4.setImage(config.Game.ASSETS.getResult(outCome[dice]));
                    this._lbl4.setText(outCome[dice].toString());
                }
                if (dice == 4) {
                    this._dice5.setImage(config.Game.ASSETS.getResult(outCome[dice]));
                    this._lbl5.setText(outCome[dice].toString());
                }
                if (dice == 5) {
                    this._dice6.setImage(config.Game.ASSETS.getResult(outCome[dice]));
                    this._lbl6.setText(outCome[dice].toString());
                }
            }
        };
        Play.prototype.Main = function () {
            var _this = this;
            this.addChild(this._table);
            // Adding the images to the scene.
            this.addChild(this._dice1);
            this.addChild(this._dice2);
            this.addChild(this._dice3);
            this.addChild(this._dice4);
            this.addChild(this._dice5);
            this.addChild(this._dice6);
            // Adding the labels to the scene.
            this.addChild(this._lbl1);
            this.addChild(this._lbl2);
            this.addChild(this._lbl3);
            this.addChild(this._lbl4);
            this.addChild(this._lbl5);
            this.addChild(this._lbl6);
            // Adding the button to the scene.
            this.addChild(this._rollButton);
            this.addChild(this._nextButton);
            // Assigning the method RollDices to the button
            this._rollButton.on("click", function () {
                _this.RollDices();
            });
            this._nextButton.on("click", function () {
                config.Game.SCENE = scenes.State.SCENEBONUS;
            });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map