export class FlyUtil {
    constructor() {
    }
    /**贝塞尔曲线运动飞物体 */
    static flyObject(from: fairygui.GObject, target: fairygui.GObject, callBack?: () => void) {
        let targetPoint = target.localToGlobal();                           //获取目标组件的本地位置
        let fromPoint = from.localToGlobal();                               //获取起始点组件的本地位置
        let points = [fromPoint, { x: Math.random() * 1334, y: Math.random() * 750 }, targetPoint];//数组内分别表示起始点，控制点，终点
        let arr = BezierPath.CreateBezierPoints(points, 100);               //根据points将运动分为100份
        this.flyItem(from, arr, 0, callBack);                               //每次运动arr的100分之1，直到arr数组内的数据全部运动结束执行callBack函数
    }
    static flyItem(from: fairygui.GObject, arr, num: number, callBack?: () => void) {
        let point = arr[num];
        Laya.Tween.to(from, { x: point.x, y: point.y }, 10, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
            if (num < arr.length - 1) {
                this.flyItem(from, arr, num + 1, callBack);
            }
            else {
                from.removeFromParent();
                if (!!callBack) callBack();
            }
        }));
    }
}

export class BezierPath {
    /**创建贝塞尔曲线的点，anchorpoints是贝塞尔的三大要素，起始点，控制点和终点的数组，pointsAmount是要分成多少个元素的数组 */
    public static CreateBezierPoints(anchorpoints, pointsAmount): Array<any> {
        var points = [];        //点的数组
        for (var i = 0; i < pointsAmount; i++) {
            var point = this.MultiPointBezier(anchorpoints, i / pointsAmount);     //生成单个点
            points.push(point);       //将生成的点加入到数组中
        }
        return points;         //返回生成完的数组
    }

    private static MultiPointBezier(points, t): any {
        let len: number = points.length;
        let x: number = 0, y: number = 0;
        for (let i: number = 0; i < len; i++) {
            let point: any = points[i];
            x += point.x * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * (this.erxiangshi(len - 1, i));
            y += point.y * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * (this.erxiangshi(len - 1, i));
        }
        return { x: x, y: y };
    }

    private static erxiangshi(start: number, end: number): number {
        let cs: number = 1, bcs: number = 1;
        while (end > 0) {
            cs *= start;
            bcs *= end;
            start--;
            end--;
        }
        return (cs / bcs);
    };
}