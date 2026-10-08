package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun StreaksScreen(onCreate:()->Unit){Card{Column{Text("Streaks");Text("Domain-specific streaks workflow");Button(onClick=onCreate){Text("Create")}}}}
