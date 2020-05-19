export class FlyUtil {
    constructor() {
    }
    static flyObject(from: fairygui.GObject, target: fairygui.GObject, callBack?: () => void) {
        let targetPoint = target.localToGlobal();
        let fromPoint = from.localToGlobal();
        let points = [fromPoint,{x:Math.random() * 1334,y:Math.random() * 750},targetPoint];//起始点，控制点，终点
        let arr = BezierPath.CreateBezierPoints(points,100);
        this.flyItem(from,arr,0,callBack);
    }
    static flyItem(from: fairygui.GObject, arr,num:number, callBack?: () => void) {
        let point = arr[num];
        Laya.Tween.to(from, { x: point.x, y: point.y }, 10, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
            if (num < arr.length-1) {
                this.flyItem(from,arr,num+1,callBack);
            }
            else {
                from.removeFromParent();
                if (!!callBack) callBack();
            }
        }));
    }
}

export class BezierPath{
    public static CreateBezierPoints(anchorpoints, pointsAmount):Array<any> {
        var points = [];
        for (var i = 0; i < pointsAmount; i++) {
            var point = this.MultiPointBezier(anchorpoints, i / pointsAmount);
            points.push(point);
        }
        return points;
    }
 
    private static MultiPointBezier(points, t):any {
        let len:number = points.length;
        let x:number = 0, y:number = 0;
        for (let i:number = 0; i < len; i++) {
            let point:any = points[i];
            x += point.x * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * (this.erxiangshi(len - 1, i));
            y += point.y * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * (this.erxiangshi(len - 1, i));
        }
        return { x: x, y: y };
    }
 
    private static erxiangshi(start:number, end:number):number {
            let cs:number = 1, bcs:number = 1;
            while (end > 0) {
                cs *= start;
                bcs *= end;
                start--;
                end--;
            }
            return (cs / bcs);
     };
}