import { useEffect, useState } from "react"

const ControlPresupuesto = ({ gastos, presupuesto }) => {
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    )

    const totalDisponible = presupuesto - totalGastado
    setDisponible(totalDisponible)

    setGastado(totalGastado)
  }, [gastos])

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("es-HN", {
      style: "currency",
      currency: "HNL",
      currencyDisplay: "symbol",
    })
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>Grafica aquí</p>
      </div>

      <div className='contenido-presupuesto'>
        <p>
          <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
        </p>

        <p>
          <span>Disponoible: </span> {formatearCantidad(disponible)}
        </p>

        <p>
          <span>Gastado: </span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto
