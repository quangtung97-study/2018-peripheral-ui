defmodule PeripheralUiWeb.LightController do
  use PeripheralUiWeb, :controller
  alias Peripheral.MCU

  def toggle(conn, %{"action" => "on"}) do
    if MCU.turn_on() == :ok do
      json(conn, %{status: "OK"})
    else
      json(conn, %{status: "ERROR"})
    end
  end

  def toggle(conn, %{"action" => "off"}) do
    if MCU.turn_off() == :ok do
      json(conn, %{status: "OK"})
    else
      json(conn, %{status: "ERROR"})
    end
  end

  def toggle(conn, _) do
    json(conn, %{status: "ERROR"})
  end

  def change(conn, %{"value" => value}) do
    {value, _} = Integer.parse(value)
    IO.puts(value + 100)
    json(conn, %{status: "OK"})
  end

  def change(conn, _) do
    json(conn, %{status: "ERROR"})
  end
end
