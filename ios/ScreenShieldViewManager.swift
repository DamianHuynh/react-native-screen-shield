@objc(ScreenShieldViewManager)
class ScreenShieldViewManager: RCTViewManager {

  override func view() -> (ScreenShieldView) {
    return ScreenShieldView()
  }

  @objc override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}

class ScreenShieldView : UIView {
    required init() {
      super.init(frame: .zero)
      ScreenShield.shared.protect(view: self)
      ScreenShield.shared.protectFromScreenRecording()
    }

    required init?(coder: NSCoder) {
      fatalError("init(coder:) has not been implemented")
    }
}
