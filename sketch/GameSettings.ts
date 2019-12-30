class GameSettings implements GameStatus, MusicStatus {
    public gameMusic: GameMusic;
    public mutedMusic: boolean;
    private gameEvents: number[];

    constructor(gameMusic: GameMusic) {
        this.mutedMusic = false;
        this.gameMusic = gameMusic;
        this.gameEvents = [];
    }

    update() {
        this.handleSoundButton();
        this.controlSound();
    }
    draw() {
    }

    // set volume on soundfile
    set setSoundVolume(value: number) {
        this.gameMusic.menuMusic.setVolume(value);
    }

    // control volume property value
    private controlSound(): void {
        if (this.mutedMusic === true) {
            this.setSoundVolume = 0;
        }
        else {
            this.setSoundVolume = 0.2;
        }
    }

    // handle sound button interaction
    private handleSoundButton(): void {
        if (dist(mouseX, mouseY, 60, 60) < 40) {
            if (this.mutedMusic === false) {
                this.mutedMusic = true;
            }
            else if (this.mutedMusic === true) {
                this.mutedMusic = false;
            }
        }
    }

    public drawSoundButton() {
        /** sound button in top left corner, need to have a mouseClicked event 
        get it overlined when clicked  */

        /** the round button */
        strokeWeight(3)
        stroke('#000000')
        fill('#F4ed47');
        circle(60, 60, 80);

        /** speaker sign in button */
        fill('#000000');
        triangle(75, 80, 75, 40, 40, 60)

        fill('#F4ed47');
        stroke('#F4ed47')
        rect(47, 50, 5, 30)

        fill('#000000');
        stroke('#000000')
        rect(38, 54, 8, 13)

        /** overline when clicked */
        if (this.mutedMusic === true) {
            strokeWeight(10)
            stroke('#000000');
            line(40, 90, 80, 30);
        }
    }

    gameStatus(): void {
        if (1) {
            this.startGame();
        }
        else if (2) {
            this.quitGame();
        }
    }
    controlEvents(): void { }
    startGame() { }
    quitGame() { }
}