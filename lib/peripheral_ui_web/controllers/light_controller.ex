defmodule PeripheralUiWeb.LightController do
  use PeripheralUiWeb, :controller

  def toggle(conn, params) do
    case params["action"] do
      "on" ->
        json(conn, %{status: "OK"})

      "off" ->
        json(conn, %{status: "OK"})

      _ ->
        json(conn, %{status: "ERROR"})
    end
  end
end
