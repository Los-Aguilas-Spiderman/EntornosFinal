function testTruthyOperators() {
    test("operadores verdaderos", () => {
      var nombre = "Software testing help";
      var n = null;
  
      expect(n).toBeNull();
      expect(nombre).not.toBeNull();
  
      // nombre tiene un valor válido
      expect(nombre).toBeTruthy();
  
      // falla - ya que null es un valor no exitoso
      expect(n).toBeTruthy();
  
      // pasa - null se trata como falso o negativo
      expect(n).toBeFalsy();
  
      // 0 - se trata como falso
      expect(0).toBeFalsy();
    });
  }
  