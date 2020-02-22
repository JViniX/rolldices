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
            // Defining the table background.
            this._table = new objects.Image(config.Game.ASSETS.getResult("table"), "table", 0, 0, false);
            //this._table.width = 640;
            //this._table.height = 580;
            this._table.scaleX = this._table.width;
            this._table.scaleY = this._table.height;
            // buttons
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 550, true);
            this._startButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 520, 550, true);
            // dices            
            this._dice1 = new objects.Image(config.Game.ASSETS.getResult("1"), "dice1", 110, 110, true);
            this._dice2 = new objects.Image(config.Game.ASSETS.getResult("2"), "dice2", 310, 110, true);
            this._dice3 = new objects.Image(config.Game.ASSETS.getResult("3"), "dice3", 510, 110, true);
            this._dice4 = new objects.Image(config.Game.ASSETS.getResult("4"), "dice4", 110, 360, true);
            // labels
            this._lbl1 = new objects.Label("1", "22px", "Consolas", "#FFFFFF", 110, 220, true);
            this._lbl2 = new objects.Label("2", "22px", "Consolas", "#FFFFFF", 310, 220, true);
            this._lbl3 = new objects.Label("3", "22px", "Consolas", "#FFFFFF", 510, 220, true);
            this._lbl4 = new objects.Label("4", "22px", "Consolas", "#FFFFFF", 110, 470, true);
            this._lblResult = new objects.Label("Result:", "40px", "Consolas", "#FFFFFF", 330, 350, true);
            this.Main();
        };
        SceneBonus.prototype.Update = function () {
        };
        // Rolls the dices and changes de image and the text in the labels.
        SceneBonus.prototype.RollDices = function () {
            var outCome = [0, 0, 0, 0];
            var dice;
            var lowest = 6;
            for (dice = 0; dice < 4; dice++) {
                outCome[dice] = Math.floor(util.Mathf.RandomRange(1, 6));
                console.log("Dice " + dice + " is " + outCome[dice]);
                if (outCome[dice] < lowest) {
                    lowest = outCome[dice];
                }
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
            }
            this._lblResult.setText("Result: " + ((outCome[0] + outCome[1] + outCome[2] + outCome[3]) - lowest));
        };
        SceneBonus.prototype.Main = function () {
            var _this = this;
            this.addChild(this._table);
            // Adding the images to the scene.
            this.addChild(this._dice1);
            this.addChild(this._dice2);
            this.addChild(this._dice3);
            this.addChild(this._dice4);
            // Adding the labels to the scene.
            this.addChild(this._lbl1);
            this.addChild(this._lbl2);
            this.addChild(this._lbl3);
            this.addChild(this._lbl4);
            this.addChild(this._lblResult);
            // Adding the button to the scene.
            this.addChild(this._rollButton);
            this.addChild(this._startButton);
            // Assigning the method RollDices to the button
            this._rollButton.on("click", function () {
                _this.RollDices();
            });
            this._startButton.on("click", function () {
                config.Game.SCENE = scenes.State.START;
            });
        };
        return SceneBonus;
    }(objects.Scene));
    scenes.SceneBonus = SceneBonus;
})(scenes || (scenes = {}));
//# sourceMappingURL=SceneBonus.js.map