import React,{useState} from "react";
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import MercadoPagoButton from '../MercadoPagoButton/MercadoPagoButton';
import Link from 'next/link';
import { useEffect } from "react";

export default function Form2(){

    const {register, formState:{errors},handleSubmit} = useForm()

    const [formValidado,setFormValidado] = useState(false);
    const [respuesta,setRespuesta]=useState(false)
    const [respuesta2,setRespuesta2]=useState(true)
    
    const [payerInfo, setPayerInfo] = useState({});
    const [payerInfoEspecial, setPayerInfoEspecial] = useState({});
    const [phone, setPhone] = useState({});
    const [address, setAddress] = useState({});
    const [metodoPago,setMetodoPago]=useState("")

    const [codigoPostal,setCodigoPostal]= useState(false)
    const [cambiarCodigo,setCambiarCodigo]=useState(false)


    useEffect(()=>{
        setFormValidado(false)
        if(cambiarCodigo){
            CP()
        }
    },[payerInfo])

    
    const handleFormSubmit = (data) => {
        setRespuesta(true)
        setFormValidado(true);
    }   


    // NOMBRE
    const handleNameData = (e) => {
        setPayerInfo({...payerInfo,name: e.target.value})
        setPayerInfoEspecial({...payerInfoEspecial,name: e.target.value})
    }

    // APELLIDO
    const handleSurnameData = (e) => {
        setPayerInfo({...payerInfo,surname: e.target.value});
        setPayerInfoEspecial({...payerInfoEspecial,surname: e.target.value});
    }

    // EMAIL
    const handleEmailData = (e) => {
        setPayerInfo({...payerInfo,email: e.target.value});
        setPayerInfoEspecial({...payerInfoEspecial,email: e.target.value});
    }

    // CODIGO DE AREA
    const handleAreaNumberPhoneData = (e) => {
        setPayerInfo({...payerInfo,phone:{...phone,area_code: e.target.value}});
        setPayerInfoEspecial({...payerInfoEspecial,phone:{...phone,area_code: e.target.value}});
        setPhone({...phone,area_code: e.target.value})
    }

    // NUMERO DE TELEFONO
    const handleNumberPhoneData = (e) => {
        setPayerInfo({...payerInfo,phone:{...phone,number: e.target.value}});
        setPayerInfoEspecial({...payerInfoEspecial,phone:{...phone,number: e.target.value}});
        setPhone({...phone,number: e.target.value})
    }

    // LOCALIDAD
    const handleLocalidad=(e)=>{
        setPayerInfoEspecial({...payerInfoEspecial,localidad: e.target.value})
    }

    // DIRECCION
    const handleStreetNameData = (e) => {
        setPayerInfo({...payerInfo, address:{...address, street_name: e.target.value}});
        setPayerInfoEspecial({...payerInfoEspecial, address:{...address, street_name: e.target.value}});
        setAddress({...address, street_name: e.target.value})
    }

    // NUMERO DE CASA
    const handleStreetNumberData = (e) => {
        setPayerInfo({...payerInfo, address:{...address, street_number:e.target.value}});
        setPayerInfoEspecial({...payerInfoEspecial, address:{...address, street_number:e.target.value}});
        setAddress({...address, street_number: e.target.value})
    }

    // CODIGO POSTAL
    const handleZipCoderData = (e) => {
        setPayerInfo({...payerInfo, address:{...address, zip_code: e.target.value}});
        setPayerInfoEspecial({...payerInfoEspecial, address:{...address, zip_code: e.target.value}});
        setAddress({...address, zip_code: e.target.value})
        setCambiarCodigo(true)
    }
    
    const CP = ()=>{
        if(payerInfo.address.zip_code==="2800" || payerInfo.address.zip_code==="2804" || payerInfo.address.zip_code==="2806"){
            setCodigoPostal(true)
        }else{
            setCodigoPostal(false)
        }
    }

    // METODO DE PAGO
    const handlePago=(pago)=>{
        setMetodoPago(pago)
    }

    return(
        <div className="container-form-compra">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
            
                <div className='form-input-title'>
                    <h2>DATOS PERSONALES</h2>
                </div>

                <div className="input-span">
                    <TextField className="form-input" size="medium" autoComplete="off"  color="secondary"  id="nameId"  placeholder="Nombre" type="text" onChangeCapture={handleNameData}
                    {...register("nameId",{required:true})}/>
                    <span className="text-danger text-small d-block mb-2">
                        {errors.nameId?.type==="required"&&"Campo obligatorio"}
                    </span>
                </div>

                <div className="input-span">
                    <TextField className="form-input" size="medium" autoComplete="off"   color="secondary"  id="surnameId"  placeholder="Apellido" type="text" onChangeCapture={handleSurnameData}
                    {...register("surnameId",{required:true})}/>
                    <span className="text-danger text-small d-block mb-2">
                        {errors.surnameId?.type==="required"&&"Campo obligatorio"}
                    </span>
                </div>
                
                <div className="input-span">
                    <TextField className="form-input" size="medium" autoComplete="off"   color="secondary"  id="emailId"  placeholder="Email" type="email" onChangeCapture={handleEmailData}
                    {...register("emailId",{required:true,pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}/>
                    <span className="text-danger text-small d-block mb-2">
                        {errors.MAIL?.type==="required"&&"Campo obligatorio"}
                        {errors.MAIL?.type==="pattern"&&"Mail no valido"}
                    </span>
                </div>

                <div>
                    <div className="input-span">
                        <TextField className="form-input" size="medium" autoComplete="off"   color="secondary"  id="numberAreaId"  placeholder="Código de area" type="number" onChangeCapture={handleAreaNumberPhoneData}
                        {...register("numberAreaId",{required:true,minLength:2,maxLength:4})}/>
                        <span className="text-danger text-small d-block mb-2">
                            {errors.numberAreaId?.type==="required"&&"Campo obligatorio"}
                            {errors.numberAreaId?.type==="minLength"&&"Cod. area sin 0"}
                            {errors.numberAreaId?.type==="maxLength"&&"Cod. area incorrecto"}
                        </span>
                    </div>

                    <div className="input-span">
                        <TextField className="form-input" size="medium" autoComplete="off"   color="secondary"  id="numberId"  placeholder="Número de telefono" type="number" onChangeCapture={handleNumberPhoneData}
                        {...register("numberId",{required:true,minLength:6,maxLength:6})}/>
                        <span className="text-danger text-small d-block mb-2">
                            {errors.numberId?.type==="required"&&"Campo obligatorio"}
                            {errors.numberId?.type==="minLength"&&"Numero incorrecto"}
                            {errors.numberId?.type==="maxLength"&&"Numero sin 15"}
                        </span>
                    </div>
                </div>
                
                <div className='form-input-title formtitle2'>
                    <h2>DATOS DE ENVIO</h2>
                </div>
                <div className="input-span">
                    <TextField className="form-input" size="medium" autoComplete="off"   color="secondary"  id="localidad"  placeholder="Localidad (Solo localidades de BsAS)" type="text" onChangeCapture={handleLocalidad}
                    {...register("localidad",{required:true})}/>
                    <span className="text-danger text-small d-block mb-2">
                        {errors.localidad?.type==="required"&&"Campo obligatorio"}
                    </span>
                </div>
                <div className="input-span">
                    <TextField className="form-input" size="medium" autoComplete="off"   color="secondary"  id="streetId"  placeholder="Calle" type="text" onChangeCapture={handleStreetNameData}
                    {...register("streetId",{required:true})}/>
                    <span className="text-danger text-small d-block mb-2">
                        {errors.streetId?.type==="required"&&"Campo obligatorio"}
                    </span>
                </div>
                <div className="input-span">
                    <TextField className="form-input" size="medium" autoComplete="off"   color="secondary"  id="streetNumberId"  placeholder="Número de calle" type="number" onChangeCapture={handleStreetNumberData}
                    {...register("streetNumberId",{required:true})}/>
                    <span className="text-danger text-small d-block mb-2">
                        {errors.streetNumberId?.type==="required"&&"Campo obligatorio"}
                    </span>
                </div>
                <div className="input-span">
                    <TextField className="form-input" size="medium" autoComplete="off"   color="secondary"  id="zipCodeId"  placeholder="Código Postal" type="number" onChangeCapture={handleZipCoderData}
                    {...register("zipCodeId",{required:true})}/>
                    <span className="text-danger text-small d-block mb-2">
                        {errors.zipCodeId?.type==="required"&&"Campo obligatorio"}
                    </span>
                </div>
                {codigoPostal?
                    <div className="radioButton">
                        <label htmlFor="efectivo">
                            <input
                                {...register("pago",{required:true})}
                                type="radio"
                                name="pago"
                                value="efectivo"
                                id="efectivo"
                                onClick={()=>handlePago("efectivo")}
                            />
                            EFECTIVO
                        </label>
                        <label htmlFor="mercadopago">
                            <input
                                {...register("pago",{required:true})}
                                type="radio"
                                name="pago"
                                value="mercadopago"
                                id="mercadopago"
                                onClick={()=>handlePago("mercadopago")}
                            />
                            MERCADOPAGO
                        </label>
                        <span className="text-danger text-small d-block mb-2">
                            {errors.pago?.type==="required"&&"Campo obligatorio"}
                        </span>
                    </div>
                :<></>}

                <button className="boton-validar" onClick={()=>{setRespuesta2(false)}}>VALIDAR</button>
                <span>
                    {respuesta?
                        <p className="validacion-mensaje">Validacion Correcta</p>
                        : respuesta2?<></>:<p className="validacion-mensaje" style={{color:"red"}}>Validacion Incorrecta</p>
                    }
                </span>
            </form>

            {/* MERCADO PAGO COMPRAR */}
            <div>
                <MercadoPagoButton payerInfo={payerInfo} formValidado={formValidado}/>
                <Link href="/Cart" className="linkStyle"><button className="boton-validar">CANCELAR</button></Link>
            </div>
        </div>
    )
}