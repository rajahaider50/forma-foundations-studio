package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun MenuScreen(onCreate:()->Unit){Card{Column{Text("Menu");Text("Domain-specific menu workflow");Button(onClick=onCreate){Text("Create")}}}}
