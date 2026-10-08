package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun DispatchScreen(onCreate:()->Unit){Card{Column{Text("Dispatch");Text("Domain-specific dispatch workflow");Button(onClick=onCreate){Text("Create")}}}}
