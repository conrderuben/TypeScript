
class Camiseta{


    private _color: String;
    private _modelo: String;
    private _marca: String;
    private _talla: string;
    private _precio: number;
    

  constructor(
    _color: String, 
    _modelo: String, 
    _marca: String, 
    _talla: string, 
    _precio: number
) {
    this._color = _color
    this._modelo = _modelo
    this._marca = _marca
    this._talla = _talla
    this._precio = _precio
  }



    public get color(): String {
        return this._color;
    }
    public set color(value: String) {
        this._color = value;
    }

    public get modelo(): String {
        return this._modelo;
    }
    public set modelo(value: String) {
        this._modelo = value;
    }

    public get marca(): String {
        return this._marca;
    }
    public set marca(value: String) {
        this._marca = value;
    }
    public get talla(): string {
        return this._talla;
    }
    public set talla(value: string) {
        this._talla = value;
    }
    public get precio(): number {
        return this._precio;
    }
    public set precio(value: number) {
        this._precio = value;
    }
    

}