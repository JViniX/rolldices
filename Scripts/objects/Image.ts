/**
 * Julio Vinicius A. de Carvalho
 * 301016383
 * Feb 22, 2020
 * Roll Dices - Test 1
 * COMP397 - Web Gaming Development
 */

module objects
{
    export class Image extends GameObject
    {
        
        // constructor
        constructor(imagePath:Object, imageName:string, x:number = 0, y:number= 0, isCentered:boolean = false)
        {
            super(imagePath, x, y, isCentered);
            this.name = imageName;

            this.Start();
        }
        
        // PRIVATE METHODS
        protected _checkBounds(): void {
            
        }

        // PUBLIC METHODS
        public setImage(imagePath:Object):void
        {
            this.image = new createjs.Bitmap(imagePath).image;
        }

        public Start(): void {
            
        }

        public Update(): void {
            
        }

        public Reset(): void {
            
        }
    }
}