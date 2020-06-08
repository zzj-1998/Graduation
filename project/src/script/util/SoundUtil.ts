export class SoundUtil {
    public static sound1: "res/sound/sound1.mp3"; //行走
    public static sound2: "res/sound/sound2.mp3"; //血瓶使用
    public static sound3: "res/sound/sound3.mp3"; //选择
    public static sound4: "res/sound/sound4.mp3"; //胜利
    public static sound5: "res/sound/sound5.mp3"; //升级
    public static sound6: "res/sound/sound6.mp3"; //开门
    public static sound7: "res/sound/sound7.mp3"; //获得道具
    public static sound8: "res/sound/sound8.mp3"; //花费金币
    public static bgm: "res/sound/bgm.mp3"; //背景音乐

    public static playBgm() {
        this.sound1 = "res/sound/sound1.mp3"; //行走
        this.sound2 = "res/sound/sound2.mp3"; //血瓶使用
        this.sound3 = "res/sound/sound3.mp3"; //选择
        this.sound4 = "res/sound/sound4.mp3"; //胜利
        this.sound5 = "res/sound/sound5.mp3"; //升级
        this.sound6 = "res/sound/sound6.mp3"; //开门
        this.sound7 = "res/sound/sound7.mp3"; //获得道具
        this.sound8 = "res/sound/sound8.mp3"; //花费金币
        this.bgm = "res/sound/bgm.mp3"; //背景音乐
        Laya.SoundManager.playMusic(this.bgm, 0);
    }

    public static playSound(sound: string) {
        Laya.SoundManager.playSound(sound, 1);
    }
}